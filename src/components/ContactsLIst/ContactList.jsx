import React, { Component } from 'react';
import { Contact } from 'components/Contact/Contact';

export class ContactList extends Component {
  filterByName(contacts) {
    {
      return contacts.filter(contact => {
        const isInclude = contact.name
          .toLowerCase()
          .includes(this.props.filterText.toLowerCase());
        if (!this.props.filterText) {
          return true;
        }
        if (isInclude) {
          return true;
        }
        return false;
      });
    }
  }

  render() {
    const { filterChange, filterText, contacts, deleteContact } = this.props;
    return (
      <div>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            onChange={filterChange}
            value={filterText}
          />
        </label>
        <ul>
          {this.filterByName(contacts).map(element => {
            return (
              <Contact
                key={element.id}
                contact={element}
                deleteContact={deleteContact}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
