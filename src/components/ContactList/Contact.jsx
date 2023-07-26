import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { MdContactPhone } from 'react-icons/md';

export const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <div className={css.contactcontainer}>
      <MdContactPhone />
      <p className={css.info}>
        {name}: {number}
      </p>
      <button onClick={() => onDeleteContact(id)} className={css.button}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
