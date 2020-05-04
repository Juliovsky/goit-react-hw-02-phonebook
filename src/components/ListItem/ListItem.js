import React from 'react'


const ListItem = ( {contact: {contact, number}}) => {
    return (
        <li>
            <p>{contact}: {number}</p>
        </li>
    )
}

export default ListItem;