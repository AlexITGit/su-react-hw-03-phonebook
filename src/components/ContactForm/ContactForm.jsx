import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  return (
    <div className={styles.wrap}>
      <h1>Phonebook</h1>
      <form
        className={styles.main}
        onSubmit={(e) => {
          e.preventDefault();
          setName("");
          setNumber("");
          addContact(name, number);
        }}
      >
        <div className={styles.item}>
          <p>Name</p>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <p>Number</p>
          <input
            className="input"
            type="tel"
            name="number"
            value={number}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </div>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
