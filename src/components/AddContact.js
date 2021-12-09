import React from "react";
import uuid from "react-uuid";

const AddContact = ({
  contacts,
  setContacts,
  mod,
  setMod,
  nameRef,
  emailRef,
  editContactId,
  setEditContactId,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([
      { id: uuid(), name: e.target.name.value, email: e.target.email.value },
      ...contacts,
    ]);
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  const handleSave = () => {
    const indexOfEditedContact = contacts.findIndex(
      (el) => el.id === editContactId
    );
    let updatedContacts = contacts.slice();
    updatedContacts[indexOfEditedContact].name = nameRef.current.value;
    updatedContacts[indexOfEditedContact].email = emailRef.current.value;
    nameRef.current.value = "";
    emailRef.current.value = "";
    setContacts([...updatedContacts]);
    setMod("addContact");
  };

  const handleCancel = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    setMod("addContact");
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" ref={nameRef} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" ref={emailRef} />
        </div>
        {mod === "addContact" ? (
          <button>Add</button>
        ) : (
          <div>
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddContact;
