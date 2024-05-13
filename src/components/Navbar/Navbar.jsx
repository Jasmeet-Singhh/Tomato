import React, { useContext, useState } from 'react'
import { assets } from "../../assets/assets";
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className={styles.navbar}>
      <Link to="/"><img src={assets.logo} alt="logo-img" className={styles.logo} /> </Link>
      <ul className={styles["navbar-menu"]}>
        <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? styles.active : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? styles.active : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? styles.active : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? styles.active : ""}>Contact Us</a>
      </ul>
      <div className={styles["navbar-right"]}>
        <img src={assets.search_icon} alt="search-icon-img" />
        <div className={styles["nabar-search-icon"]}>
          <Link to="/cart"> <img src={assets.basket_icon} alt="basket-icon-img" /> </Link>
          <div className={getTotalCartAmount() === 0 ? "" : styles.dot}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar