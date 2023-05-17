import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from '../Redux/action';


function EditContact() {


    const { id } = useParams()
    console.log(id)

    const dispatch = useDispatch()

    const AllContact = useSelector((store) => store.contacts)



    const [form, setForm] = useState({})

    const handleChange = (e) => {
     
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }




    function handleSave() {



        dispatch(editContact({ id, ...form }))

    }

    useEffect(() => {

        AllContact.filter((el) => el.id == id && setForm(el))

    }, [])

    return (
        <div className="container p200 brdr d-flex flex-column justify-content-center align-items-center">
            <p className="row h2">Create Contact</p>
            <div className="row">
                <label className="row" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="row"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                <label className="row" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="row"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                <label className="row" htmlFor="last-name">
                    Mobile Number
                </label>
                <input
                    className="row"
                    id="last-name"
                    type="number"
                    name="mob"
                    min='10'
                    max='10'
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>
            <div className="row mb-4">
                <label className="row" htmlFor="status">
                    Status
                </label>
                <select
                    className="row"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value={'active'}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                </select>
            </div>
            <button
                className="btn btn-outline-success"
                onClick={handleSave}
            >
                Save Edited Contact
            </button>
        </div>
    );
}


export default EditContact