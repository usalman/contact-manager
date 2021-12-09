import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({
  contacts,
  setContacts,
  mod,
  setMod,
  nameRef,
  emailRef,
  editContactId,
  setEditContactId,
}) => {
  return (
    <div>
      <h2>Contast List</h2>
      {contacts.map((contact) => {
        return (
          <ContactCard
            key={contact.id}
            contact={contact}
            contacts={contacts}
            setContacts={setContacts}
            mod={mod}
            setMod={setMod}
            nameRef={nameRef}
            emailRef={emailRef}
            editContactId={editContactId}
            setEditContactId={setEditContactId}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
