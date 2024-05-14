import { assets } from "../../assets/assets";
import styles from "./Footer.module.css";

import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footer} id="footer">
      <div className={styles["footer-content"]}>
        <div className={styles["footer-content-left"]}>
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cumque corrupti libero ea doloribus minima veritatis harum recusandae optio? Nesciunt, atque fuga pariatur sapiente impedit modi temporibus possimus quos magnam.</p>
          <div className={styles["footer-social-icons"]}>
            <img src={assets.facebook_icon} alt="" className={styles["social-icons"]} />
            <img src={assets.twitter_icon} alt="" className={styles["social-icons"]} />
            <img src={assets.linkedin_icon} alt="" className={styles["social-icons"]} />
          </div>
        </div>
        <div className={styles["footer-content-center"]}>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About U s</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles["footer-content-right"]}>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+12-346-9900</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className={styles["footer-copyright"]}>
        Copyright {currentYear} © Tomato.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer