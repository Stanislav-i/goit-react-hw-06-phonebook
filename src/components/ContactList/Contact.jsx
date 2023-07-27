import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { MdContactPhone } from 'react-icons/md';

import {useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ name, number, id, onDeleteContact }) => {
  // const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();


  return (
    <div className={css.contactcontainer}>
      <MdContactPhone />
      <p className={css.info}>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))} className={css.button}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
