import React, { useContext } from 'react'
import styles from "./PlaceOrder.module.css";
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div>
      <form className={styles["place-order"]}>
        <div className={styles["place-order-left"]}>
          <p className={styles.title}>DELIVERY INFORMATION</p>
          <div className={styles["multi-fields"]}>
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
          </div>
          <input type="text" placeholder='Email address' />
          <input type="text" placeholder='Street' />
          <div className={styles["multi-fields"]}>
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className={styles["multi-fields"]}>
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />
        </div>
        <div className={styles["place-order-right"]}>
          <div className={styles["cart-total"]}>
            <h2>Cart Totals</h2>
            <div>
              <div className={styles["cart-total-details"]}>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className={styles["cart-total-details"]}>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className={styles["cart-total-details"]}>
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder