import React from 'react';
import {connect} from 'react-redux';
import styles from './Cart.module.css';

function Cart({ basketProps }) {

    let productsInCart = [];
    
    Object.keys(basketProps.products).forEach( function(item) {
        console.log(basketProps.products[item].inCart)
         if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
         }
    })

    productsInCart = productsInCart.map( (products) => {
        return (
            <li className={styles.wrapper}>
                <p>{products.name}</p>
            <p>{products.price}</p>
            <p>{products.numbers}</p>
            </li>
        )
    });

    return (
        <>
        <ul>{productsInCart}</ul>
        <div className={styles.total}>Total: {basketProps.cartCost}$</div>
        </>
    )
};
const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps)(Cart);
