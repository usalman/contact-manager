import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contast List</h2>
      {contacts.map((contact) => {
        return <li key={contact.id}>{contact.name}</li>
      })}
    </div>
  );
};

export default ContactList;
