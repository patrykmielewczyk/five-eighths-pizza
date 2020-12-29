import React from "react";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../../actions/productQuantity";
import styles from "./Cart.module.css";

function Cart({ basketProps, productQuantity, clearProduct }) {
  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function (item) {
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
  });

  productsInCart = productsInCart.map((products, id) => {
    return (
      <li className={styles.item} key={id}>
        <button
          className={styles.quantityButton}
          onClick={() => clearProduct(products.tagName)}
        >
          x
        </button>
        <p>{products.name}</p>
        <p>{products.price}$</p>
        <p>
          <button
            className={styles.quantityButton}
            onClick={() => productQuantity("decrease", products.tagName)}
          >
            -
          </button>
          {products.numbers}
          <button
            className={styles.quantityButton}
            onClick={() => productQuantity("increase", products.tagName)}
          >
            +
          </button>
        </p>
      </li>
    );
  });

  return (
    <>
      <ul className={styles.table}>
        <li className={styles.tableItem}>name</li>
        <li className={styles.tableItem}>price</li>
        <li className={styles.tableItem}>quantity</li>
      </ul>
      <ul className={styles.wrapper}>{productsInCart}</ul>
      <div className={styles.total}>
        Total: {basketProps.cartCost}${" "}
        <button className={styles.orderButton}>Order</button>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
