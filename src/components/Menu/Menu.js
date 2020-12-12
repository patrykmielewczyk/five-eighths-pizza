import React from 'react';
import styles from './Menu.module.css';
import pizzaData from '../../data/data';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';
import margeritaImage from '../../assets/images/margerita.jpg';

const Menu = (props) => {
//const pizzaList = pizzaData.map((pizzaData) =>
//    <li key={pizzaData.id} className={styles.list}>
//        <p>{pizzaData.label}</p>
//        <p>{pizzaData.ingredients}</p>
//        <img src={pizzaData.image} className={styles.image}/>
//        <input 
//            type="submit" 
//            value="order" 
//            className={styles.button} 
//            onClick={() => props.addBasket(pizzaData.value)}
//        />
//    </li>
//    )

    return (
            <ul className={styles.wrapper}>
                <li className={styles.list}>
                    <p>Margerita</p>
                    <p>chees, tomato sauce, basil "</p>
                    <img src={margeritaImage} className={styles.image}/>
                    <input
                        type="submit"
                        value="order"
                        className={styles.button}
                        onClick={() => props.addBasket('margerita')}
                    />
                </li>
            </ul>
    )
}

export default connect(null, {addBasket})(Menu);