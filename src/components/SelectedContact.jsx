import React, { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
        console.log(result);
      } catch (error) {
        console.error( error);
      }
    }

    fetchContact();
  }, [selectedContactId]);

  if (!contact) {
    return <p>Contacts Loading...</p>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => setSelectedContactId('')}>Main List</button>
    </div>
  );
};

export default SelectedContact;
