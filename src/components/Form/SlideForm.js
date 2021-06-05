import React, { Component } from "react";
import styles from "./SlideForm.module.css";
// import { handleCreateSlide, handleAuthClick } from "../../utils/google-slides";
import { handleAuthClick } from "../../utils/google-slides";
import fakeData from "../../data-models/slides-example.json";

const onSubmit = () => {
  console.log("Data submitted: ", fakeData);
  handleAuthClick(fakeData);
  // handleCreateSlide(fakeData);
};

class SlideForm extends Component {
  render() {
    return (
      <div className={styles.formContainer}>
        <h2>Test Google Slides</h2>
        <h5>Send Fake Data to Google Slides to Test</h5>
        <button onClick={onSubmit}>Test</button>
      </div>
    );
  }
}

export default SlideForm;
