import React from 'react'
import BrandLogo from "../../assets/logo.png";
import styles from "./Logo.module.css";


function Logo() {
  return (
    <img className={styles.logo} src={BrandLogo} alt="BrandLogo" />
  )
}

export default Logo