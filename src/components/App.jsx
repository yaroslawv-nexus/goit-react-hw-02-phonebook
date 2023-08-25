import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsLIst/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...contact }],
    }));
  };

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
        />
      </div>
    );
  }
}
