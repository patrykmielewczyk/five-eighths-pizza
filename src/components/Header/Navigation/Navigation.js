import React from 'react'
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <nav role="full-horizontal"className={styles.wrapper}>
            <a href="#about" className={styles.navButton}>About</a>
            <a href="#" className={styles.navButton}>Order</a>
            <a href="#" className={styles.navButton}>Contact</a>
        </nav>
    )
}

export default Navigation
