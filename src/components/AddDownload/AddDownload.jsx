import React from 'react'
import styles from "./AddDownload.module.css";
import { assets } from '../../assets/assets';

const AddDownload = () => {
  return (
    <div className={styles["app-download"]} id={styles["app-download"]}>
      <p>For Better Experience Download <br /> Tomato App </p>
      <div className={styles["app-download-platforms"]}>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AddDownload