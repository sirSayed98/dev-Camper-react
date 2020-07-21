import React from 'react'
import SearchBylocation from './SearchBylocation'
import Filter from './SearchBylocation'
import Bootcamp from './Bootcamp'

const Bootcamps = () => {
    return (
        <section className="browse my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <SearchBylocation />
                        <Filter />
                    </div>
                    <div className="col-md-8 mt-5">
                        <Bootcamp />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Bootcamps
