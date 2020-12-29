import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav role="full-horizontal" className={styles.wrapper}>
      <NavLink exact to="/about" className={styles.navButton}>
        About
      </NavLink>
      <NavLink exact to="/order" className={styles.navButton}>
        Order
      </NavLink>
      <NavLink exact to="/contact" className={styles.navButton}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navigation;
