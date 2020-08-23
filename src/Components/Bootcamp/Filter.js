import React, { Fragment } from 'react'

const Filter = () => {
    return (
        <Fragment>
            <h4>Filter</h4>
            <form>
                <div className="form-group">
                    <label> Rating</label>
                    <select className="custom-select mb-2">
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
                    <select className="custom-select mb-2">
                        <option value="any" selected>Any</option>
                        <option value="20000">$7500</option>
                        <option value="15000">$5000</option>
                        <option value="10000">$2500</option>
                        <option value="8000">$2000</option>
                        <option value="6000">$1500</option>
                        <option value="4000">$1000</option>
                        <option value="2000">$500</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Find Bootcamps"
                    className="btn btn-primary btn-block"
                />
            </form>
        </Fragment>
    )
}

export default Filter
