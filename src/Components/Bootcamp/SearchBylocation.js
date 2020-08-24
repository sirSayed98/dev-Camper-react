import React, {useContext, useState } from 'react'
import bootcampContext from '../../context/bootcamp/bootcampContext'
const SearchBylocation = () => {
    const BootcampContext = useContext(bootcampContext);
    const { FilterLocation } = BootcampContext;
    const [FilterObj, setFilterObj] = useState({
        zipcode: 0,
        distance: 0

    });
    const { zipcode, distance } = FilterObj;

    const onChange = e => setFilterObj({ ...FilterObj, [e.target.name]: e.target.value*1 })

    const onSubmit = () => {
        FilterLocation(zipcode, distance);

    }

    return (
        <div>
            <div className="card card-body mb-4">
                <h4 className="mb-3">By Location</h4>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                name="distance"
                                placeholder="Miles From"
                                onChange={onChange}
                                type="number"
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
                    onClick={onSubmit}
                />

            </div>
        </div>
    )
}

export default SearchBylocation
