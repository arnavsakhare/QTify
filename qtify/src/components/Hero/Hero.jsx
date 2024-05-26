import React from 'react'
import Headphones from "../.././assets/hero_headphones.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
        <div >
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousand podcast episodes</h1>
        </div>
        <div>
            <img src={Headphones} alt="HeadPhone Image" height="212px" width="212px"/>
        </div>
    </div>
  )
}

export default Hero