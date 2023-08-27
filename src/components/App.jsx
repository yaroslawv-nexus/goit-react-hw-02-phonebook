import React, { Component } from 'react';
import { CreateContactForm } from './ContactForm/CreateContactForm';
import { ContactList } from './ContactsLIst/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

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
      alert('the contact already exists');
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
    return this.state.contacts.some(
      element => contact.name.toLowerCase() === element.name.toLowerCase()
    );
  }

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <CreateContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filterText={this.state.filter}
          filterChange={this.filterChange}
        />
        <ContactList
          deleteContact={this.deleteContact}
          filterByName={this.filterByName}
        />
      </Container>
    );
  }
}
