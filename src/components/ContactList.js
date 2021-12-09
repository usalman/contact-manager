import React, { useRef } from "react";
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
  searchResults,
  setSearchResults,
}) => {
  const searchInputRef = useRef("");

  const handleChange = () => {
    const searchValue = searchInputRef.current.value;
    if (searchValue !== "") {
      searchResults = contacts.filter((contact) => {
        return (
          contact.name.includes(searchValue) ||
          contact.email.includes(searchValue)
        );
      });
      console.log(searchResults);
      setSearchResults(searchResults);
    } else {
      setSearchResults(contacts);
    }
  };

  return (
    <div>
      <h2>Contast List</h2>
      <input
        type="text"
        placeholder="Search Contacts"
        ref={searchInputRef}
        onChange={handleChange}
      />
      {(searchResults.length === 0 && searchInputRef.current.value === ""
        ? contacts
        : searchResults
      ).map((contact) => {
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
