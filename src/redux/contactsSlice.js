import { createSlice } from "@reduxjs/toolkit";

import defaultContacts from '../data/defaultContacts';

const initialState = defaultContacts;

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => { 
            state.push(action.payload)
        },
        deleteContact: (state, action) => { 
                  const index = state.findIndex(
                    contact => contact.id === action.payload
                  );
                  state.splice(index, 1);
            // state.filter(contact => contact.id !== action.payload)
        },
    }
})

export const { addContact, deleteContact} = contactsSlice.actions;

export default contactsSlice.reducer;