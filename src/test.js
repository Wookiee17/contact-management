import contactpng from "./icons/contact-book.png";
import chartpng from "./icons/bar-chart.png"
import ContactForm from "./components/contactform";
const Test = () => {
    return (
        <>
            <div className="brdr header d-flex justify-content-center position-fixed w-100 top-0">
                <div className="brdr"><p className="h1">Contact Management</p></div>
            </div>
            <div className="brdr sidebar position-fixed w-25">
                <div className="brdr d-flex flex-column align-items-center justify-content-center">
                    <img src={contactpng} />
                    <p>Contacts</p>
                </div>
                <div className="brdr d-flex flex-column align-items-center justify-content-center">
                    <img src={chartpng} />
                    <p>Chart</p>
                </div>
            </div>
            <ContactForm style={{ display: "grid" }} />
        </>
    )
};
export default Test;