import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contast List</h2>
      {contacts.map((contact) => {
        return <ContactCard contact={contact}/>
      })}
    </div>
  );
};

export default ContactList;
