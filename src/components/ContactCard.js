import React from 'react'

const ContactCard = ({contact}) => {
  return (
    <>
      <li key={contact.id}>{contact.name} / {contact.email}</li>
    </>
  )
}

export default ContactCard
