/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Link } from "react-router-dom"
import { BASE_URL } from '../../context/types'
const Bootcamp = ({ boot }) => {

    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img style={{ width: "250px", height: "180px" }} src={`${BASE_URL}/uploads/${boot.photo}`} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link target='_blank' to={`/bootcamp/${boot.id}`}>{boot.name}
                                <span className="float-right badge badge-success">{boot.averageRating}</span></Link>
                        </h5>
                        <span className="badge badge-dark mb-2">{boot.location.city ? boot.location.city : "City"},{boot.location.city ? boot.location.country : "Country"}</span>
                        <p className="card-text">
                            {boot.careers.join(' - ')}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Bootcamp
