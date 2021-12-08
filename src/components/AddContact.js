import React from "react";

const AddContact = () => {
  return (
    <div>
      <h2>Add Contact</h2>
      <form>
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
