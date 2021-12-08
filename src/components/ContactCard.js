import React from "react";

const ContactCard = ({ contact, contacts, setContacts }) => {

  const handleClickDelete = (e) => {
    e.preventDefault();
    setContacts(contacts.filter(el => el.id !== contact.id))
  }
  
  return (
    <>
      <li>
        {contact.name} / {contact.email}
        <button onClick={handleClickDelete}>Delete</button>
      </li>
    </>
  );
};

export default ContactCard;
