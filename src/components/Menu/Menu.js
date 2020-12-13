import React from 'react';
import styles from './Menu.module.css';
import pizzaData from '../../data/data';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';
import margeritaImage from '../../assets/images/margerita.jpg';
import capriciosaImage from '../../assets/images/capriciosa.jpg';
import peperoniImage from '../../assets/images/peperoni.jpg';

const Menu = (props) => {
    return (
        <>
        <ul className={styles.wrapper}>
            <li className={styles.list}>
                <p>Margerita</p>
                <p>chees, tomato sauce, basil</p>
                <p>Price: 12$</p>
                <img src={margeritaImage} className={styles.image}/>
                <input
                    type="submit"
                    value="add to cart"
                    className={styles.button}
                    onClick={() => props.addBasket('margerita')}
                />
            </li>
        </ul>
        <ul className={styles.wrapper}>
            <li className={styles.list}>
                <p>Capriciosa</p>
                <p>chees, ham, muschroms, tomato souce</p>
                <p>Price: 15$</p>
                <img src={capriciosaImage} className={styles.image}/>
                <input
                    type="submit"
                    value="add to cart"
                    className={styles.button}
                    onClick={() => props.addBasket('capriciosa')}
                />
            </li>
        </ul>
        <ul className={styles.wrapper}>
            <li className={styles.list}>
                <p>Peperoni</p>
                <p>chees, peperoni, tomato souce, olive</p>
                <p>Price: 17$</p>
                <img src={peperoniImage} className={styles.image}/>
                <input
                    type="submit"
                    value="add to cart"
                    className={styles.button}
                    onClick={() => props.addBasket('peperoni')}
                />
            </li>
        </ul>            
        </>
    );
}

export default connect(null, {addBasket})(Menu);