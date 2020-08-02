import React from 'react'

const manageReviews = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="card bg-white py-2 px-4">
                        <div className="card-body">
                            <h1 className="mb-4">Manage Reviews</h1>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Bootcamp</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>DevWorks Bootcamp</td>
                                        <td>10</td>
                                        <td>
                                            <a href="add-review.html" className="btn btn-secondary"><i className="fas fa-pencil-alt"></i></a>
                                            <button className="btn btn-danger">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Codemasters</td>
                                        <td>7</td>
                                        <td>
                                            <a href="add-review.html" className="btn btn-secondary"><i className="fas fa-pencil-alt"></i></a>
                                            <button className="btn btn-danger">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default manageReviews
