
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SingleNote = ({ note, handleDeleteNote }) => {

    const { title, description, _id } = note;

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const [bgcolor, setBgColor] = useState(getRandomColor());

    return (
        <>
            
            <Helmet>
                <title>My Notes</title>
            </Helmet>

            <div>
                <div className="card text-white" style={{ backgroundColor: bgcolor }}>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{description.slice(0, 70)}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to={`/notes/${_id}`}>View</Link></button>
                            <button onClick={() => handleDeleteNote(_id)} className="btn btn-secondary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleNote;