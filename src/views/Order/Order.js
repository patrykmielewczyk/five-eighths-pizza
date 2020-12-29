import React from "react";
import styles from "./Order.module.css";
import Menu from "../../components/Menu/Menu";

function Order() {
  return (
    <div>
      <h1 className={styles.menu}>Menu:</h1>
      <Menu />
    </div>
  );
}

export default Order;
