import React, {Component} from 'react'
import List from './List/List'
import Phonebook from "./Phonebook";

class Tasks extends Component {
    state = {
        contacts: [
            // {id: 'id-1', contact: 'Rosie Simpson', number: '459-12-56'},
            // {id: 'id-2', contact: 'Hermione Kline', number: '443-89-12'},
            // {id: 'id-3', contact: 'Eden Clements', number: '645-17-79'},
            // {id: 'id-4', contact: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',

    }

    filterList = () => {
        if (this.state.filter)
            return this.state.contacts.filter(item =>
                item.contact.toLowerCase().includes(this.state.filter)
            );

        return(this.state.contacts)
        // return this.state.contacts.filter(item => {
        //     item.contact.includes(this.state.filter)
        // })
    }

    getFilterValue = (e) => {
        this.setState({filter: e.target.value})
    }

    getContactInfo = (newContact) => {
        this.setState(prevstate => ({
            contacts: [...prevstate.contacts, newContact]
        }))
    }
    deleteItem = (e) => {
        const id = e.target.id;
        console.log(e.target)
        this.setState(prevstate => ({
            contacts: [...prevstate.contacts.filter(contact => contact.id !== id)]
        }))
    }

    render() {
        return (
            <>
                <Phonebook getContactInfo={this.getContactInfo}
                    contacts={this.state.contacts}
                />
                <List
                    contacts={this.state.contacts}
                    filterList={this.filterList()}
                    filter={this.state.filter}
                    getFilterValue={this.getFilterValue}
                    deleteItem ={this.deleteItem}
                />
            </>
        );
    }
}

export default Tasks;