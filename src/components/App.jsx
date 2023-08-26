import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsLIst/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (this.checkDuplicate(contact)) {
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...contact }],
    }));
  };

  deleteContact = e => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(element => {
          return element.id !== e.target.id;
        }),
      };
    });
  };

  checkDuplicate(contact) {
    let flag = false;
    this.state.contacts.map(element => {
      if (contact.name.toLowerCase() === element.name.toLowerCase()) {
        alert('the contact already exists');
        flag = true;
      }
      return;
    });
    return flag;
  }

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div>
        <ContactForm addContact={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          filterText={this.state.filter}
          filterChange={this.filterChange}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
