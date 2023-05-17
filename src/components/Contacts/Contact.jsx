import React from 'react';
import { useState } from 'react';
import DisplayContacts from './DisplayContacts';
import './Contact.css';

function Contact(props) {
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [contact, SetContact] = useState(false)
    const [status, setStatus] = useState("active")

    const AddContact = () => {
        SetContact(true)
    }
    const AddContact1 = () => {
        SetContact(false)
    }
    const handleSubmit = (e) => {
        setFirstname("");
        setLastname("");
        e.preventDefault();
        const obj = {
            first: firstname,
            last: lastname,
            completed: (status === "active"),

        }

        console.log(obj)
        fetch("https://taiyo-server-production.up.railway.app/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then((res) => res.json())
          .then((data) => {
            // setStatus(data)
          });

          alert("I have saved your contact details, and if you would like to view those, please click the 'View All Contact' button.")

    }
    return (
        <div className='main-container'>
            <div className="header">
                <h1>Contact Page</h1>
            </div>
            {
                contact === false ?

                    <div className="add-contact">
                        <button className="add-contact-button" onClick={AddContact}>Create Contact</button>


                        <div>
                            <DisplayContacts/>
                        </div>
                    </div> :

                    <div className='create-contact'>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <label htmlFor="firstname">First Name:</label>
                                <input type="text"
                                    id="firstname"
                                    value={firstname}
                                   
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="lastname">Last Name:</label>
                                <input type="text"
                                    id="lastname"
                                    value={lastname}
                                   
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </div>
                            <div className="form-row1">
                                <h3>Status:</h3>
                                <div>
                                <label>
                                  <input
                                    type="radio"
                                    value="active"
                                    checked={status === "active"}
                                    onChange={(e) => setStatus(e.target.value)}
                                  />
                                  Active
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    value="inactive"
                                    checked={status === "inactive"}
                                    onChange={(e) => setStatus(e.target.value)}
                                  />
                                  Inactive
                                </label>
                              </div>  
                            </div>
                            <button type='submit'   className="save-contact-button">Save Contact</button>
                             

                        </form>
                        <div className='view-contact-buttondiv'>
            <button className="view-contact-button" onClick={AddContact1}>View All Contact</button>
        </div>

                       
     </div>



            }
        </div>
    );
}

export default Contact;
