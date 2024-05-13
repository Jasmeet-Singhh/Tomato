import React, { useContext } from 'react'
import styles from "./Cart.module.css";
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className={styles.cart}>
      <div key={cartItem._id} className={styles["cart-items"]}>
        <div className={styles["cart-items-title"]}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <React.Fragment key={item._id}>
                <div className={`${styles["cart-items-title"]} ${styles["cart-items-item"]}`}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className={styles.cross}>x</p>
                </div>
                <hr />
              </React.Fragment>
            )
          }
        })}
      </div>
      <div className={styles["cart-bottom"]}>
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
              <p>${2}</p>
            </div>
            <hr />
            <div className={styles["cart-total-details"]}>
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={styles["cart-promo-code"]}>
          <div>
            <p>If you hve promo code, Enter here </p>
            <div className={styles["cart-promocode-input"]}>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Cart