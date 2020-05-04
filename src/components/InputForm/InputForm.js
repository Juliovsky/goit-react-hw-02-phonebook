import React from "react";

export function InputForm({handleChange, contact, number}) {
    return (
        <>
            <h2>Name</h2>
            <input
                name='contact'
                placeholder="Please put the name"
                onChange={handleChange}
                value={contact}
                type="text"
            />
            <h3>Number</h3>
            <input
                name='number'
                placeholder="Please put the number"
                onChange={handleChange}
                value={number}
                type="number"
            />
        </>
    )
}



