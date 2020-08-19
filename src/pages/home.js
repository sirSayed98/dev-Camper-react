/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext } from 'react'
import authContext from '../context/auth/authContext'

const home = () => {
    const AuthContext = useContext(authContext);
    useEffect(() => {
        if (AuthContext.user === null)
            AuthContext.loadUser();
    }, [])
    return (
        <section className="showcase">
            <div className="dark-overlay">
                <div className="showcase-inner container">
                    <h1 className="display-4">Find a Code Bootcamp</h1>
                    <p className="lead">
                        Find, rate and read reviews on coding bootcamps
					</p>
                    <form action="bootcamps.html">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="miles"
                                        placeholder="Miles From"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="zipcode"
                                        placeholder="Enter Zipcode"
                                    />
                                </div>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Find Bootcamps"
                            className="btn btn-primary btn-block"
                        />
                    </form>
                </div>
            </div>
        </section>

    )
}

export default home
