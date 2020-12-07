import React from 'react';
import logoImage from '../../assets/images/logo.png';
import styles from './Header.module.css';
import Navigation from './Navigation/Navigation';

function Header() {
    return (
        <div className={styles.wrapper}>
        <p className={styles.name}>Five Eighths Pizza</p>
        <img src={logoImage} className={styles.logo} alt="logo"/>
        <Navigation/>
        </div>
    )
}

export default Header
