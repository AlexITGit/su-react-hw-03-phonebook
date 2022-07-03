import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

export const Filter = ({ changeFilter }) => {
  return (
    <div className={styles.wrap}>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input onChange={(e) => changeFilter(e.target.value)}></input>
    </div>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
