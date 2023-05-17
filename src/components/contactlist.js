import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import MyVerticallyCenteredModal from "./popup"
import { removeContact } from "../Redux/action"
import cross from "./../icons/pngwing.com.png"
import React from 'react';

const Contacts = () => {

    const [singleContact, setSingleContact] = useState({})
    const [modalShow, setModalShow] = React.useState(false);
    let data = undefined
    const AllContacts = useSelector((store) => store.contacts)
    const dispatch = useDispatch()
    // console.log(AllContacts)
    const togglePopup = (contact) => {
        setSingleContact(contact);
        // setModalShow(true);
    }
    useEffect(() => {

    }, [dispatch, AllContacts.length])
    return (
        <div className=" d-flex flex-column justify-content-center align-items-center mt-4">
            <div className=" container mt-5 mb-2 d-flex justify-content-center">
                <Link to="/contact_form">
                    <button className="btn btn-outline-primary">
                        Create Contact
                    </button>
                </Link>
            </div>
            {AllContacts.length == 0 &&
                <div className=" container row">
                    <div className="col-3"><img src={cross} /></div>
                    <div className="col ">
                        No Contact Found Please add contact from Create Contact button.
                    </div>
                </div>
            }
            <div id="contact_list" className=" container row gap-xl-5">

                {
                    AllContacts.map((el) => {
                        return (
                            <div key={el.id} className="brdr col-xl-3 col-lg-4 col-md-6 col-sm-10 mb-2">

                                <div onClick={() => togglePopup(el)} className=" container brdr card-col ">
                                    <div className=' d-flex justify-content-center'>
                                    <Button variant="primary" onClick={() => setModalShow(true)} className='popup'>
                                        <img className="cursor " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAANlBMVEWVu9////+QuN6Mtt3K3O7j7Pby9vvE2OyavuCvy+akxOPY5fLp8Pj6/P260umqyOWFstvR4PDphOmSAAADqElEQVR4nO1b27KiMBCECbkCgfz/zy43dT0HyTRmdGuLfrJKyzSTuXZIVV24cOFCARCpGURfWVy54G3TzmisD059lMb00LE19d8wOlafs8UY2noPbRg/sj45vbv+DO0+YAayL9efYcUp0GsDbGYQpqBMhsDkk0qSAHVZAnXdCVqB9mPgJ1oxChRZBOo6ilHomQx6ofVVYhKo6yTjjcQmUNci20ANwKARoZBPBQ8YCQIDQKCuh/IEoE0Q2YZsQXiGQHlwiBtMjuCKM8DcQMIRPMjAlyZAKIPitSHTGn2CARaMAuF4MTjhB8WbZnZ/dEN5T4TzQfG0/P2cGLhN4oo+FGfw/crEGlYeEBhbFG9auUGX75bBcJQYWgLEoLwjVvyJaYbI1AQ1iiIqwj8wsSCOIOIG1QgwkBHVCJidhQQEfnESmNkWMGSsFWJiFrtPEhQVeUYQqIs3KJ4RRHVVjhFE1IsbWAVSTsubMeb7lE5Y4ne5CtnLueGK7D7I7sFC4dvnC1NIHlXpRlTav1N4vRFRnMBqYvL7acFsk5rcRlBl1fZhr1CnbWllZTiQctPE0G5mVi49h2Wf3PbVOP+s+AEoqSquueh+fkI0JG1mGr3RaXicdq6TTRerciSmp/f6vvOde3Ag50IIztF9fXL3pGm0L2OJ6VnbJ4P3/rXDq/j803Z4+ySYyP72ex32Oajwe6Qw9j07kN8vA3r49b+TrfZHmv4dNeVgSOma4GZPWFG50LyumufHl8zRltGtjd77aFt93LmcPfiCBbzXOFmvsHH9GKeaBvBQ5RinZmlUvjvGiSlKlTTBKV0J1A9zwPXFgoGwAg6HERMw8zBoE+8KE4ADEhbz8wDbeEAv4QLUVUAVmQNQaUbeduACY1A2Ia6A0mLxbDADygiglM9DCyXm8o44uSJCADzS4QESuEo2Jw8AxQk+XOQBaJpFQgEKBpFQgIJBSYTCFAx8BiQRClMw8HchK9mdAyD0Fe4R7wz44SgTjMAbQkLpAEgIAi3aCnajJpSQgJQEv3fDBVtIEEqJQFK8GEAvJmNgqznfj8ay8skDkJCSyleGPgHrz9r5jpb6Dox1qIpCozsQKTF0jRtP6XlEzma0yjyMtu4deZuUG5ruLAvTNUMJhZ9UNfy8wsVYvY1DwUOO5Q5dsElzQqTXyQaZ+3aLij7EpDuzx6Q3nU7TgxMJX3AjtZzuDD42KS13+1Jqoh+W056P3vCbH1Wp7YLjd644Xrhw4T/DHzhTKer8tGZTAAAAAElFTkSuQmCC" alt="" />
                                    </Button>
                                    </div>
                                    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} data={singleContact} />
                                    <div className="d-flex flex-column brdr justify-content-center align-items-center">
                                        <p>{el.first_name} {el.last_name}</p>
                                        <p>Status : {el.status == "active" ? "Active" : "Inactive"}</p>
                                    </div>
                                </div>

                                <div className=" d-flex flex-row justify-content-around card-col">
                                    <Link to={`edit/${el.id}`}>
                                        <button className="btn btn-outline-warning">
                                            Edit
                                        </button>
                                    </Link>
                                    <button onClick={() => dispatch(removeContact(el.id))} className=" btn btn-outline-danger">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Contacts;