import React from "react";
import styles from "./MainLayout.module.css";
import { handleInitApp } from "../utils/google-slides";

function loadApi() {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/client.js";
  document.body.appendChild(script);

  script.onload = () => {
    window.gapi.load("client:auth2", handleInitApp.bind(this));
  };
}

export default class MainLayout extends React.Component {
  componentDidMount() {
    loadApi();
  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <header>{/* <Header /> */}</header>
        <main className={styles.main}>{children}</main>
      </div>
    );
  }
}
