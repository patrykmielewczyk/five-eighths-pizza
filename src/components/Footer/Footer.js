import React from 'react';
import styles from './Footer.module.css';

import facebookImage from '../../assets/images/facebook.png';
import instagramImage from '../../assets/images/instagram.png';
import twitterImage from '../../assets/images/twitter.png';

function Footer() {
    return (
        <footer className={styles.wrapper}>
            <p className={styles.copyText}>© Five Eighths Pizza 2020</p>
            <p className={styles.followText}>Follow us on Social channels!:</p>
            <a href="https://www.facebook.com/">
                <img 
                    src={facebookImage} 
                    alt="facebook" 
                    className={styles.socialIcon}
                />
            </a>
            <a href="https://www.instagram.com/">
                <img 
                    src={instagramImage} 
                    alt="instagram" 
                    className={styles.socialIcon}
                />
            </a>
            <a href="https://twitter.com/?lang=pl">
                <img 
                    src={twitterImage} 
                    alt="twitter" 
                    className={styles.socialIcon}
                />
            </a>
        </footer>
    )
}
export default Footer;
