import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contacts/operations";
import PropTypes from 'prop-types';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.container}>
      <div className={css.wraper}>
        <FaUser />
        <div>{name}</div>

        <FaPhone />
        <div>{number}</div>
      </div>
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,  // name повинен бути рядком і є обов'язковим
  number: PropTypes.string.isRequired, // number теж рядок і обов'язковий
  id: PropTypes.oneOfType([             // id може бути рядком або числом і є обов'язковим
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};