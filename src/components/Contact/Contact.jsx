import { ContactItemStyle } from './Contact.styled';

export const Contact = ({ contact, deleteContact }) => {
  return (
    <ContactItemStyle>
      <h3>{contact.name}</h3> <p>{contact.number}</p>
      {'  '}
      <button onClick={deleteContact} id={contact.id}>
        Delete
      </button>
    </ContactItemStyle>
  );
};
