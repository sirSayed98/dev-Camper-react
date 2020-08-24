/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from 'react'
import bootcampContext from '../context/bootcamp/bootcampContext'
import Bootcamp from '../Components/Bootcamp/Bootcamp'

const home = () => {
    const BootcampContext = useContext(bootcampContext);
    const { FilterLocation, searchBootcamp, resetFlags } = BootcampContext;
    const [FilterObj, setFilterObj] = useState({
        zipcode: 0,
        distance: 0

    });
    const { zipcode, distance } = FilterObj;

    const onChange = e => setFilterObj({ ...FilterObj, [e.target.name]: e.target.value * 1 })

    const onSubmit = () => {
        FilterLocation(zipcode, distance);
    }
    useEffect(() => {
        resetFlags();
    }, [])
    const reset = () => {
        resetFlags();
    }
    return (
        <section className="showcase">
            <div className="dark-overlay">
                <div className="showcase-inner container">
                    <h1 className="display-4">Find a Code Bootcamp</h1>
                    <p className="lead">
                        Find, rate and read reviews on coding bootcamps
					</p>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="distance"
                                    placeholder="Miles From"
                                    onChange={onChange}

                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="zipcode"
                                    placeholder="Enter Zipcode"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Find Bootcamps"
                        className="btn btn-primary btn-block"
                        data-toggle="modal"
                        data-target="#myModal"
                        onClick={onSubmit}
                    />
                    {/* <!-- The Modal --> */}
                    <div className="modal fade" id="myModal">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">

                                {/* <!-- Modal Header --> */}
                                <div className="modal-header">
                                    <h4 style={{ color: 'black' }} className="modal-title">Bootcamps</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div className="modal-body" style={{ color: 'black' }}>

                                    {
                                        (searchBootcamp && searchBootcamp.length > 0) ? searchBootcamp.map(bootcamp => {
                                            return (<Bootcamp boot={bootcamp} key={bootcamp.id} />)
                                        }) : <h1>No Bootcamps available </h1>
                                    }
                                </div>

                                {/* <!-- Modal footer --> */}
                                <div className="modal-footer">
                                    <button onClick={reset} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default home
