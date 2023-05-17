import contactpng from './../icons/contact-book.png';
import chartpng from './../icons/bar-chart.png';
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="brdr sidebar position-fixed w-25">
            <Link to='/' style={{textDecoration:"none"}}>
                <div className="brdr d-flex flex-column align-items-center justify-content-center btn btn-outline-primary">
                    <img src={contactpng} />
                    <p>Contacts</p>
                </div>
            </Link>
            <Link to='/dashboard' style={{textDecoration:"none"}}>
                <div className="brdr d-flex flex-column align-items-center justify-content-center btn btn-outline-primary">
                    <img src={chartpng} />
                    <p>Chart</p>
                </div>
            </Link>
        </div>
    )
};