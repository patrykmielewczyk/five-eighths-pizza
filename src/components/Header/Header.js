import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import styles from './Header.module.css';
import Navigation from './Navigation/Navigation';
import { connect } from 'react-redux';
import { getNumbers } from '../../actions/getAction';
import cartImage from '../../assets/images/cart.png';

function Header(props) {

    useEffect(() => {
       getNumbers();
    }, [])
    return (
        <div className={styles.wrapper}>
        <p className={styles.name}>Five Eighths Pizza</p>
        <img src={logoImage} className={styles.logo} alt="logo"/>
        <Navigation/>
        <NavLink exact to ="/cart" className={styles.cart}>
            <img src={cartImage} className={styles.image}/>
            <div className={styles.value}>{props.basketProps.basketNumbers}</div>
        </NavLink>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Header)
