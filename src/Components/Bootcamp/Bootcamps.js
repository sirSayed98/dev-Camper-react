import React from 'react'
import SearchBylocation from './SearchBylocation'
import Filter from './SearchBylocation'
import Bootcamp from './Bootcamp'

const Bootcamps = () => {
    return (
        <section class="browse my-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mt-5">
                        <SearchBylocation />
                        <Filter />
                    </div>
                    <div class="col-md-8 mt-5">
                        <Bootcamp />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Bootcamps
