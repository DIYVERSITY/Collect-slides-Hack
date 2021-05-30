import React, { Component } from "react";
import axios from "axios";
import InputForm from "../../components/InputForm/InputForm.js";
import TextAreaSlide from "../../components/TextAreaSlide/TextAreaSlide";
import styles from "./Home.module.css";
import { handleAuthClick } from "../../utils/google-slides";

const endPoints = {
  all: "https://537946d0b176.ngrok.io/",
  intro: "https://537946d0b176.ngrok.io/intro",
  problem: "https://537946d0b176.ngrok.io/problem",
  solution: "https://537946d0b176.ngrok.io/solution",
  persona: "https://537946d0b176.ngrok.io/persona",
  conclusion: "https://537946d0b176.ngrok.io/conclusion",
  team: "https://537946d0b176.ngrok.io/team",
};

const dummyText =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitData.bind(this);
  }

  submitData(data) {
    console.log(data);
    for (let key in endPoints) {
      axios.get(endPoints[key], { params: { data: data } }).then((response) => {
        console.log(key, response.data);
      });
    }
  }

  render() {
    function printToSlides() {
      console.log("button pressed");
      // pass data into the function below to send to slides
      handleAuthClick();
    }
    return (
      <div className={styles.homeContainer}>
        <div>Home page</div>
        <InputForm submit={this.submitData} />

        <TextAreaSlide title="Intro (slide 1)" description={dummyText} />
        <TextAreaSlide title="Problem (slide 2)" description={dummyText} />
        <TextAreaSlide title="Solution (slide 3)" description={dummyText} />
        <TextAreaSlide title="Persona (slide 4)" description={dummyText} />
        <TextAreaSlide title="Competitor (slide 5)" description={dummyText} />

        <div className={styles.buttonContainer}>
          <button>Save</button>
        </div>
        <div onClick={printToSlides} className={styles.buttonContainer}>
          <button>Print to Slides</button>
        </div>
      </div>
    );
  }
}

export default Home;
