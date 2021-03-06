/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState, useEffect } from 'react'
import MultiSelect from "react-multi-select-component";

import bootcampContext from '../../context/bootcamp/bootcampContext'
import AuthContext from '../../context/auth/authContext'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const createBootcamp = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const BootcampContext = useContext(bootcampContext);
    const authContext = useContext(AuthContext);
    const MySwal = withReactContent(Swal)
    const options = [
        { label: "Web Development", value: "Web Development" },
        { label: "Mobile Development", value: "Mobile Development" },
        { label: "UI/UX", value: "UI/UX" },
        { label: "Data Science", value: "Data Science" },
        { label: "Business", value: "Business" },
        { label: "Other", value: "Other" },
        { label: "Languages", value: "Languages" },
    ];
    let [bootcamp, setBootcamp] = useState({
        name: '',
        description: '',
        website: '',
        phone: '',
        email: '',
        address: '',
        careers: [],
        housing: false,
        jobAssistance: false,
        jobGuarantee: false,
        acceptGi: false,
        user: 1
    });
    let [selected, setSelected] = useState([]);

    const { Create, bootcamps } = BootcampContext;

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        if (bootcamps != null) {

            createBootcampDone()
            props.history.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bootcamps])

    function createBootcampDone() {
        MySwal.fire(
            `Bootcamp ${name} created Successfully`,
            'Add Courses now !',
            'success')
    }


    let { name, description, website, phone, email, address, careers, housing, jobAssistance, jobGuarantee, acceptGi } = bootcamp;

    const onChange = e => setBootcamp({ ...bootcamp, [e.target.name]: e.target.value });

    const handleChecked = e => {
        setBootcamp({ ...bootcamp, [e.target.name]: e.target.checked })
    }
    const onSubmit = e => {
        e.preventDefault();
        for (let index = 0; index < selected.length; index++) {
            careers.push(selected[index].value)
        }
        bootcamp.user = authContext.user.data._id

        Create({
            name, description, website, phone, email, address, careers, housing, jobAssistance, jobGuarantee, acceptGi,
        })
    }


    return (
        <section className="container mt-5">
            <div className="mt-5">
                <h1 className="text-center" style={{ marginTop: "100px" }}>Add Bootcamp</h1>
                <p className="text-center">Important: You must be affiliated with a bootcamp to add to DevCamper</p>
            </div>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card bg-white py-2 px-4">
                            <div className="card-body">
                                <h3>Location & Contact</h3>
                                <p className="text-muted">
                                    If multiple locations, use the main or largest</p>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Bootcamp Name"
                                        onChange={onChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        placeholder="Full Address"
                                        required
                                        onChange={onChange}
                                    />
                                    <small className="form-text text-muted">Street, city, state, etc</small>
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Phone"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Contact Email"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Website</label>
                                    <input
                                        type="text"
                                        name="website"
                                        className="form-control"
                                        placeholder="Website URL"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-white py-2 px-4">
                            <div className="card-body">
                                <h3>Other Info</h3>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        name="description"
                                        rows="5"
                                        className="form-control"
                                        placeholder="Description (What you offer, etc)"
                                        maxLength="500"
                                        required
                                        onChange={onChange}
                                    ></textarea>
                                    <small className="form-text text-muted"
                                    >No more than 500 characters</small
                                    >
                                </div>
                                <div className="form-group">
                                    <h5>Careers</h5>
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy={"Select"}
                                    />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="housing"
                                        id="housing"
                                        onChange={handleChecked}
                                    />
                                    <label className="form-check-label" htmlFor="housing">
                                        Housing
                                </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="jobAssistance"
                                        id="jobAssistance"
                                        onChange={handleChecked}
                                    />
                                    <label className="form-check-label" htmlFor="jobAssistance">
                                        Job Assistance
                                </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="jobGuarantee"
                                        id="jobGuarantee"
                                        onChange={handleChecked}
                                    />
                                    <label className="form-check-label" htmlFor="jobGuarantee">
                                        Job Guarantee
                                </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="acceptGi"
                                        id="acceptGi"
                                        onChange={handleChecked}
                                    />
                                    <label className="form-check-label" htmlFor="acceptGi">
                                        Accepts GI Bill
                                </label>
                                </div>
                                <p className="text-muted my-4">
                                    *After you add the bootcamp, you can add the specific courses
                                    offered
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Submit Bootcamp"
                        className="btn btn-success btn-block my-4"
                    />

                </div>
            </form>
        
        </section>

    )
}

export default createBootcamp
