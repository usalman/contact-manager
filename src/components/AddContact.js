import React from "react";

const AddContact = ({contacts, setContacts}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    setContacts([
      ...contacts, { id: Math.random() * 1234, name: e.target.name.value, email: e.target.email.value }
    ])
  }

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Surname:</label>
          <input type="text" name="email" />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddContact;
