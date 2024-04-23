import { Link } from "react-router-dom";
import Allnotes from "../../layouts/allnotes/Allnotes";
import Keepnotes from "../../layouts/keepnotes/Keepnotes";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Notekhata | Online Notebook</title>
            </Helmet>

            <div className="p-4 gap-4 flex items-start justify-start container flex-col md:flex-row-reverse">
                <Keepnotes></Keepnotes>
                <button className="btn btn-secondary mx-auto block"><Link to='/notes'>My notes</Link></button>
            </div>
        </div>
    );
};

export default Home;