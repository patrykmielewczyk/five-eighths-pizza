import React from "react";
import styles from "./Contact.module.css";
import mapImage from "../../assets/images/mapImage.png";

function Contact() {
  return (
    <div className={styles.wrapper}>
      <a href="https://goo.gl/maps/tL7aGF1tuD2BgpER7">
        <img src={mapImage} className={styles.image} alt="map"/>
      </a>
      <p>Phone: 00 99 99 99</p>
      <a href="mailto:dsadjgsdf@pizza.com">
        Email: fiveeighthspizza@outlook.com
      </a>
      <p>Address: Pouytenga, Burkina Faso</p>
    </div>
  );
}

export default Contact;
