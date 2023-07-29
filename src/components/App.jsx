import React from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { setFilterValue } from 'redux/filterSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const searchInputId = nanoid();

  const handleFilterChange = e => {
    const userQuery = e.target.value;
    dispatch(setFilterValue(userQuery));
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
      dispatch(addContact({ id: contactId, name: name, number: number }));
    }
    form.reset();
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

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

      <ContactList contactList={getFilteredContacts()} />
    </div>
  );
};
