/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react'
import Filter from './Filter'
import Bootcamp from './Bootcamp'
import bootcampContext from '../../context/bootcamp/bootcampContext'
import Preload from '../preload'

const Bootcamps = () => {
    const BootcampContext = useContext(bootcampContext);
    const { allBootcamps, getALLBootcamps, searchBootcamp } = BootcampContext;

    useEffect(() => {
        getALLBootcamps();
    }, [])

    return (
        <section className="browse my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <Filter />
                    </div>
                    <div className="col-md-8 mt-5">
                        {(searchBootcamp === null && allBootcamps !== null) ? allBootcamps.map(bootcamp => {
                            return (<Bootcamp boot={bootcamp} key={bootcamp.id} />)
                        }) : null}

                        {
                            (searchBootcamp) ? searchBootcamp.map(bootcamp => {
                                return (<Bootcamp boot={bootcamp} key={bootcamp.id} />)
                            }) : null
                        }

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Bootcamps
