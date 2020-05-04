import React from "react";

function InputSearch({ getFilterValue, filter}) {

        return (
            <>
                <h5>Find contacts by name</h5>
                <input
                    name='filter'
                    placeholder="search"
                    type="text"
                    onChange={getFilterValue}
                    value={filter}
                />
            </>
        )

}

export default InputSearch