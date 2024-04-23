import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const Viewnote = () => {


    const singleNote = useLoaderData();

    const { title, description } = singleNote;

    return (
        <div>

            <Helmet>
                <title>{ title}</title>
            </Helmet>


            <div className="w-1/2 mx-auto min-h-screen">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><a><Link to='/'>Home</Link></a></li>
                        <li><a><Link to='/notes'>My Notes</Link></a></li>
                        <li>{ title}</li>
                    </ul>
                </div>
                <div className="hero-content">
                    <div className="card md:w-full shadow-2xl">
                        <form className="card-body text-black">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Note title</span>
                                </label>
                                <input type="text" name="amount" defaultValue={title} className="md:w-full rounded p-3 input-bordered bg-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Note Content</span>
                                </label>
                                {/* <p className="border p-4 rounded">{description}</p> */}
                                <textarea defaultValue={description} className="textarea bg-white textarea-bordered textarea-lg md:w-full min-h-screen" ></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Viewnote;