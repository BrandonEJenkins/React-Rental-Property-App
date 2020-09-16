import React from 'react';

const SearchField = (props) => (

    <form>
        <div className="form-input">
            <input 
                type="text"
                name="zipcode"
                placeholder="Enter zipcode"
                value={props.zipcode}
                onChange={(event) => props.handleChange(event)}
            />
        </div>
            <button onClick={(event) => props.displayPropertySearch(event)}>Submit</button>
    </form>

);

export default SearchField;