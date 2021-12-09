import React from "react";

const ContactCard = ({
  contact,
  contacts,
  setContacts,
  setMod,
  nameRef,
  emailRef,
  setEditContactId,
}) => {
  const handleClickDelete = (e) => {
    e.preventDefault();
    setContacts(contacts.filter((el) => el.id !== contact.id));
  };

  const handleClickEdit = (id) => {
    nameRef.current.value = contact.name;
    emailRef.current.value = contact.email;
    setEditContactId(id);
    setMod("editContact");
  };

  return (
    <>
      <li>
        {contact.name} / {contact.email}
        <button onClick={() => handleClickEdit(contact.id)}>Edit</button>
        <button onClick={handleClickDelete}>Delete</button>
      </li>
    </>
  );
};

export default ContactCard;
