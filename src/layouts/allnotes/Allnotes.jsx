import { Link, useLoaderData } from "react-router-dom";
import SingleNote from "./SingleNote";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Allnotes = () => {

    const [notes, setNotes] = useState(useLoaderData());

    //delete note;

    const handleDeleteNote = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/notes/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = notes.filter(note => note._id !== id)
                            setNotes(remaining)
                        }
                    })

            }
        });
    }


    return (
        <>
            
            <div className="text-sm breadcrumbs ml-4">
                <ul>
                    <li><a><Link to='/'>Home</Link></a></li>
                    <li>My Notes</li>
                </ul>
            </div>
            <div className='grid md:grid-cols-4 gap-3 m-3'>
                {
                    notes.map(note => <SingleNote key={note._id} note={note} handleDeleteNote={handleDeleteNote}></SingleNote>)
                }
            </div>
        </>
    );
};

export default Allnotes;