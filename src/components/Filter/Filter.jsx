import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ id, value, onChange }) => {
  return (
    <div className={css.filtercontainer}>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" id={id} value={value} onChange={onChange} />
    </div>
  );
};

Filter.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
