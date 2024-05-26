import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import styles from "./Navbar.module.css";
import Search from '../Search/Search';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Link to="/">
            <Logo />
        </Link>
        <Search
            placeholder="Search an album of your choice..."
        />
        <Button>Give Feedback</Button>
    </nav>
  )
}

export default Navbar