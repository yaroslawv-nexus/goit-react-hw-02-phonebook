import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    const { contact, deleteContact } = this.props;
    return (
      <li>
        {contact.name}: {contact.number}
        {'  '}
        <button onClick={deleteContact} id={contact.id}>
          Delete
        </button>
      </li>
    );
  }
}
