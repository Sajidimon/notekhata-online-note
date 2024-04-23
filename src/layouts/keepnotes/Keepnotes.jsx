import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';

const Keepnotes = () => {

    const editorRef = useRef(null);
    const quillRef = useRef(null);
    const initializedRef = useRef(false); 

    useEffect(() => {
        if (!initializedRef.current) {
            const toolbarOptions = [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean']
            ];

            quillRef.current = new Quill(editorRef.current, {
                modules: {
                    toolbar: toolbarOptions
                },
                placeholder: 'Start writing your note',
                theme: 'snow'
            });

            initializedRef.current = true; 
        }

        return () => {
            if (quillRef.current) {
                quillRef.current = null; 
            }
        };
    }, []);


    // form handle;

    const {
        register,
        handleSubmit,
        reset
    } = useForm();


    const onSubmit = (data) => {
        const description = document.getElementById('description').innerText;
        const title = data.title;
        const formData = { title, description }
        console.log(formData)
        reset();

        fetch('http://localhost:5000/notes', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        

    }
    
    return (
        <div className="md:w-10/12">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <input type="text" {...register("title")} placeholder="Note title" className="bg-[#F8F9FA] text-black input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control">
                    <div ref={editorRef} id='description' className="bg-[#F8F9FA] text-black w-full min-h-screen p-4" required>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Note</button>
                </div>
            </form>
        </div>
    );
};

export default Keepnotes;
