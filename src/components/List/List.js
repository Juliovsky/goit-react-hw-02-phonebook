import React from 'react';
import ListItem from "../ListItem/ListItem";
import InputSearch from "../InputForm/InputSearch";

const List =({contacts, filterList, filter,getFilterValue }) => {
    if(contacts.length !== 0) {
        return (
            <>
            <h3>Contacts</h3>
                <InputSearch
                 filter={filter}
                 getFilterValue={getFilterValue}
                />
            <ul>
                {filterList.map(contact => <ListItem key={contact.id}
                                                   contact={contact}/>)}
            </ul>
                {console.log(filterList)}
                </>
        );
    }else{
        return (<></>)
    }

}
export default List;