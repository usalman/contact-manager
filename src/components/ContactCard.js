import React from "react";

const ContactCard = ({ contact }) => {
  return (
    <>
      <li>
        {contact.name} / {contact.email}
      </li>
    </>
  );
};

export default ContactCard;
