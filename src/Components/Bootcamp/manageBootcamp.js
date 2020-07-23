/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import bootcampContext from '../../context/bootcamp/bootcampContext'
const manageBootcamp = () => {
    const BootcampContext = useContext(bootcampContext);

    const { bootcamps, loadBootcamp } = BootcampContext;

    useEffect(() => {
        if (bootcamps == null) {
            loadBootcamp();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bootcamps])

    return (
        <section class="container mt-5">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <div class="card bg-white mt-5 py-2 px-4">
                        <div class="card-body ">
                            <h1 class="mb-4">Manage Bootcamp</h1>
                            <div class="card mb-3">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="img/image_1.jpg" class="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                <Link to={`/bootcamps/${bootcamps.data.id}`}>{bootcamps.data.name ? bootcamps.data.name:"BootCamp"} Bootcamp
													<span class="float-right badge badge-success">{bootcamps.data.averageRating ? bootcamps.data.averageRating:"Not rated yet"}</span></Link>
                                            </h5>
                                            <span class="badge badge-dark mb-2">{bootcamps.data.city ? bootcamps.data.city:" "},{bootcamps.data.country ? bootcamps.data.country:"EG"}</span>
                                            <p class="card-text">
                                              { 
                                              bootcamps.data.careers ? bootcamps.data.careers.join('-'):"other careers" 
                                              }
											</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form class="mb-4">
                                <div class="form-group">
                                    <div class="custom-file">
                                        <input
                                            type="file"
                                            name="photo"
                                            class="custom-file-input"
                                            id="photo"
                                        />
                                        <label class="custom-file-label" for="photo">Add Bootcamp Image</label>
                                    </div>
                                </div>
                                <input type="submit" class="btn btn-light btn-block" value="Upload Image" />
                            </form>
                            <Link to="/edit-bootcamp" class="btn btn-primary btn-block">Edit Bootcamp Details</Link>
                            <Link href="/manage-courses" class="btn btn-secondary btn-block">Manage Courses</Link>
                            <Link href="/remove-bootcamp" class="btn btn-danger btn-block">Remove Bootcamp</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default manageBootcamp
