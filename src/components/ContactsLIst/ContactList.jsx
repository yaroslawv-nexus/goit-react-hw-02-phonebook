import { Contact } from 'components/Contact/Contact';
import { ContactListStyle } from './ContactList.styled';

export const ContactList = ({ filterByName, deleteContact }) => {
  return (
    <div>
      <ContactListStyle>
        {filterByName().map(element => {
          return (
            <Contact
              key={element.id}
              contact={element}
              deleteContact={deleteContact}
            />
          );
        })}
      </ContactListStyle>
    </div>
  );
};
