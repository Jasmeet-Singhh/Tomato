import React, { useState } from 'react'
import { assets } from "../../assets/assets";
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState("Home");
  return (
    <div className={styles.navbar}>
      <img src={assets.logo} alt="logo-img" className={styles.logo} />
      <ul className={styles["navbar-menu"]}>
        <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? styles.active : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? styles.active : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? styles.active : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? styles.active : ""}>Contact Us</a>
      </ul>
      <div className={styles["navbar-right"]}>
        <img src={assets.search_icon} alt="search-icon-img" />
        <div className={styles["nabar-search-icon"]}>
          <img src={assets.basket_icon} alt="basket-icon-img" />
          <div className={styles.dot}></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar