import React from "react";
import uuid from 'react-uuid';

const AddContact = ({contacts, setContacts}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    setContacts([
      ...contacts, { id: uuid(), name: e.target.name.value, email: e.target.email.value }
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
          <label>Email:</label>
          <input type="text" name="email" />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddContact;
