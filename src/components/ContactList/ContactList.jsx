import React from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={styles.wrap}>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p className={styles.name}>{contact.name}:</p>
            <p className={styles.tel}>{contact.number}</p>
            <button
              className={styles.btn_list}
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
