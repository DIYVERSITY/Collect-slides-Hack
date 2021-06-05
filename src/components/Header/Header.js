import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.css";
import { handleAuthClick, handleSignoutClick } from "../../utils/google-slides";

function Header() {
  const history = useHistory();
  function gotoHome() {
    history.push("/");
  }
  function signIn() {
    handleAuthClick();
  }
  function signOut() {
    handleSignoutClick();
  }
  return (
    <div className={styles.navBar}>
      <button onClick={gotoHome}>Home</button>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Header;
