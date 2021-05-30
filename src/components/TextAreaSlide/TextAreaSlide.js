import React from "react";
import styles from "./TextAreaSlide.module.css";
import RefreshIcon from "@material-ui/icons/Refresh";

function TextAreaSlide(props) {
  const refreshSlide = () => {
    console.log("refresh slide button pressed");
  };
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <div className={styles.title}>{props.title}</div>
        <button onClick={refreshSlide}>
          <RefreshIcon />
        </button>
      </div>
      <textarea className={styles.text_area}>{props.description}</textarea>
    </div>
  );
}

export default TextAreaSlide;
