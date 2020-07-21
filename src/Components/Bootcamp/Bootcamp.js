import React from 'react'

const Bootcamp = () => {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="img/image_1.jpg" className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            <a href="bootcamp.html">Devworks Bootcamp
                          <span className="float-right badge badge-success">8.8</span></a>
                        </h5>
                        <span className="badge badge-dark mb-2">Boston, MA</span>
                        <p className="card-text">
                            Web Development, UI/UX, Mobile Development
                                    </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Bootcamp
