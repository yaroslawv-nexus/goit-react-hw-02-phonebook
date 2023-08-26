import React, { Component } from 'react';
import { ContactItemStyle } from './Contact.styled';

export class Contact extends Component {
  render() {
    const { contact, deleteContact } = this.props;
    return (
      <ContactItemStyle>
        <h3>{contact.name}</h3> <p>{contact.number}</p>
        {'  '}
        <button onClick={deleteContact} id={contact.id}>
          Delete
        </button>
      </ContactItemStyle>
    );
  }
}
