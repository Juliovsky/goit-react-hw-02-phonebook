import React, { Component } from "react";
import {InputForm} from './InputForm/InputForm';
import {BtnFormSubmit} from './Button/BtnFormSubmit';


import { uuid } from 'uuidv4';

class Phonebook extends Component{
    state = {
        contact: '',
        number: '',

    };

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    };

    checkContactExist = (contactName) => {
        const allContacts = this.props.contacts;
        const include = allContacts.filter(item =>
            item.contact.toLowerCase()
                .includes(contactName.toLowerCase())
        );

        return (include.length !== 0);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const contact = this.state.contact;
        const number = this.state.number;
        if (contact && number){

            if (this.checkContactExist(contact)){
                return alert ("Already exist :(");
            }else {

                const newContact = {id: uuid(), contact, number}
                this.props.getContactInfo(newContact);
                this.setState({contact: '', number: ''})
            }
        }
    };



render(){

  return (
      <form onSubmit={this.handleSubmit}>
      <InputForm
          contact={this.state.contact}
          number={this.state.number}
          handleChange={this.handleChange}/>
          <BtnFormSubmit/>
      </form>

  );
}

}

export default Phonebook;