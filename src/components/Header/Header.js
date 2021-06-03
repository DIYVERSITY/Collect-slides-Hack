import React from "react";
import styles from "./Header.module.css";
import { handleAuthClick, handleSignoutClick } from "../../utils/google-slides";

function Header() {
  function signIn() {
    handleAuthClick();
  }
  function signOut() {
    handleSignoutClick();
  }
  return (
    <div className={styles.navBar}>
      <button>Home</button>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Header;
