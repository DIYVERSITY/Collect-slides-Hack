import React, { Component } from "react";
import axios from "axios";
import InputForm from "../../components/InputForm/InputForm.js";
import TextAreaSlide from "../../components/TextAreaSlide/TextAreaSlide";
import ImageArea from "../../components/Images/ImageArea.js";
import styles from "./Home.module.css";
import { handleAuthClick } from "../../utils/google-slides";

const url = "http://bd48b27f1da6.ngrok.io/";
const endPoints = {
  intro: "intro",
  problem: "problem",
  solution: "solution",
  persona: "persona",
  conclusion: "conclusion",
  team: "team",
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conclusion: {
        conclusion: "",
      },
      competitors: [
        {
          name: "",
          description: "",
        },
      ],
      intro: {
        introImages: ["strings Image url"],
        mission: "",
        title: "",
      },
      persona: {
        age: "",
        name: "",
        needs: "",
        pains: "",
        scenario: [""],
      },
      problem: {
        problem: "",
      },
      solution: {
        solution: "",
      },
      team: [
        {
          LinkedInImg: "",
          description: "",
          name: "",
        },
      ],
      imageUrl: "",
    };
    this.handleRefresh.bind(this);
  }

  handleRefresh(key) {
    axios.get(url + endPoints[key]).then((response) => {
      this.setState({ key: response.data });
    });
  }

  printToSlides = () => {
    console.log("button pressed");
    // pass data into the function below to send to slides
    let intro = {
      introImages: [this.state.imageUrl],
      mission: this.state.intro.mission,
      title: this.state.intro.title,
    };
    let presentationData = {
      conclusion: this.state.conclusion,
      competitors: this.state.competitors,
      intro: intro,
      persona: this.state.persona,
      problem: this.state.problem,
      solution: this.state.solution,
      team: this.state.team,
    };
    console.log(presentationData);
    handleAuthClick(presentationData);
  };

  handleImageSelection = (src) => {
    this.setState({ imageUrl: src });
  };

  submitData = (data) => {
    console.log(data);
    let handleData = this.handleAPIResponse;
    console.log(handleData);
    for (let key in endPoints) {
      console.log(endPoints[key]);
      axios
        .get(url + endPoints[key], { params: { data: data } })
        .then((response) => {
          console.log(key, response.data);
          if (key === "intro") this.setState({ intro: response.data });
          else if (key === "problem") this.setState({ problem: response.data });
          else if (key === "solution")
            this.setState({ solution: response.data });
          else if (key === "persona") this.setState({ persona: response.data });
          else if (key === "conclusion")
            this.setState({ conclusion: response.data });
          else if (key === "team") this.setState({ team: response.data });
          // handleData(key, response.data);
        });
    }
  };

  render() {
    return (
      <div className={styles.homeContainer}>
        <InputForm submit={this.submitData} />
        <TextAreaSlide
          title="Intro (slide 1)"
          section="intro"
          data={this.state.intro}
        />
        {this.state.intro.title !== "" ? (
          <ImageArea
            keyword={this.state.intro.imgKeyWords}
            select={this.handleImageSelection}
          />
        ) : (
          <div></div>
        )}
        <TextAreaSlide
          title="Problem (slide 2)"
          section="problem"
          data={this.state.problem}
        />

        <TextAreaSlide
          title="Solution (slide 3)"
          section="solution"
          data={this.state.solution}
        />
        <TextAreaSlide
          title="Persona (slide 4)"
          section="persona"
          data={this.state.persona}
        />
        {/* <TextAreaSlide
          title="Competitor (slide 5)"
          section="competitors"
          data={this.state.competitors}
        /> */}
        <TextAreaSlide
          title="Conclusion (slide 5)"
          section="conclusion"
          data={this.state.conclusion}
        />
        <div className={styles.buttonContainer}>
          <button>Save</button>
        </div>
        <div onClick={this.printToSlides} className={styles.buttonContainer}>
          <button>Print to Slides</button>
        </div>
      </div>
    );
  }
}

export default Home;
