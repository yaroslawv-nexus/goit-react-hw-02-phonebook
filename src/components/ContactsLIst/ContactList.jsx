import React, { Component } from 'react';
import { Contact } from 'components/Contact/Contact';
import {
  ContactListStyle,
  ContactContainer,
  InputSearchStyle,
  LabelSearchStyle,
} from './ContactList.styled';

export class ContactList extends Component {
  filterByName(contacts) {
    if (!this.props.filterText) {
      return contacts;
    }

    return contacts.filter(contact => {
      const isInclude = contact.name
        .toLowerCase()
        .includes(this.props.filterText.toLowerCase());

      if (isInclude) {
        return true;
      }
      return false;
    });
  }

  render() {
    const { filterChange, filterText, contacts, deleteContact } = this.props;
    return (
      <ContactContainer>
        <h2>Contacts</h2>
        <label>
          <LabelSearchStyle>Find contacts by name</LabelSearchStyle>
          <InputSearchStyle
            type="text"
            name="filter"
            onChange={filterChange}
            value={filterText}
          />
        </label>
        <ContactListStyle>
          {this.filterByName(contacts).map(element => {
            return (
              <Contact
                key={element.id}
                contact={element}
                deleteContact={deleteContact}
              />
            );
          })}
        </ContactListStyle>
      </ContactContainer>
    );
  }
}
