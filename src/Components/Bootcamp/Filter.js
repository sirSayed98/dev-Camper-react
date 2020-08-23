/* eslint-disable no-unused-vars */
import React, { Fragment, useContext, useState } from 'react'
import bootcampContext from '../../context/bootcamp/bootcampContext'
const Filter = () => {
    const BootcampContext = useContext(bootcampContext);
    const { Filter } = BootcampContext;
    const [FilterObj, setFilterObj] = useState({
        rate: 0,
        cost: 0

    });
    const { rate, cost } = FilterObj;

    const onChange = e => setFilterObj({ ...FilterObj, [e.target.name]: e.target.value })

    const onSubmit = () => {
        Filter(rate, cost);

    }
    return (
        <Fragment>
            <h4>Filter</h4>

            <div className="form-group">
                <label> Rating</label>
                <select onChange={onChange} className="custom-select mb-2" name="rate">
                    <option value="any" selected>Any</option>
                    <option value="9">9+</option>
                    <option value="8">8+</option>
                    <option value="7">7+</option>
                    <option value="6">6+</option>
                    <option value="5">5+</option>
                    <option value="4">4+</option>
                    <option value="3">3+</option>
                    <option value="2">2+</option>
                </select>
            </div>
            <div className="form-group">
                <label> Budget</label>
                <select onChange={onChange} className="custom-select mb-2" name="cost">
                    <option value="any" selected>Any</option>
                    <option value="3000">$3000</option>
                    <option value="2000">$2000</option>
                    <option value="1500">$1500</option>
                    <option value="1000">$1000</option>
                    <option value="750">$750</option>
                    <option value="500">$500</option>
                    <option value="200">$200</option>
                </select>
            </div>
            <input
                type="submit"
                value="Find Bootcamps"
                className="btn btn-primary btn-block"
                onClick={onSubmit}
            />
        </Fragment>
    )
}

export default Filter
