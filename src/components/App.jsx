import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
// import defaultContacts from '../data/defaultContacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const searchInputId = nanoid();

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contactId = nanoid();
    if (
      contacts.some(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      addContact(contactId, name, number);
    }
    form.reset();
  };

  const addContact = (contactId, name, number) => {
    const contact = {
      id: contactId,
      name,
      number,
    };

    setContacts([contact, ...contacts]);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        color: 'biege',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={handleSubmit}
        nameInputId={nameInputId}
        numberInputId={numberInputId}
      />

      <h2>Contacts</h2>

      <Filter id={searchInputId} value={filter} onChange={handleFilterChange} />

      <ContactList
        contactList={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};