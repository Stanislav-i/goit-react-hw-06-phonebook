import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { Contact } from './Contact';

export const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul className={css.liststyle}>
      {contactList.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
