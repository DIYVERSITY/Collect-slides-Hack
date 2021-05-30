import React, { Component } from "react";
import axios from "axios";
import InputForm from "../../components/InputForm/InputForm.js";
import TextAreaSlide from "../../components/TextAreaSlide/TextAreaSlide";
import styles from "./Home.module.css";
import { handleAuthClick } from "../../utils/google-slides";

const endPoints = {
  intro: " http://1fbac4e4f025.ngrok.io/intro",
  problem: " http://1fbac4e4f025.ngrok.io/problem",
  solution: " http://1fbac4e4f025.ngrok.io/solution",
  persona: " http://1fbac4e4f025.ngrok.io/persona",
  conclusion: " http://1fbac4e4f025.ngrok.io/conclusion",
  team: " http://1fbac4e4f025.ngrok.io/team",
};

const dummyText =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "conclusion": {
        "conclusion": "string"
      },
      "competitors": [
        {
          "name": "string",
          "description": "string"
        }
      ],
      "intro": {
        "introImages": ["strings Image url"],
        "mission": "string",
        "title": "string"
      },
      "persona": {
        "age": "string",
        "name": "string",
        "needs": "string",
        "pains": "string",
        "scenario": ["strings"]
      },
      "problem": {
        "problem": "string"
      },
      "solution": {
        "solution": "string"
      },
      "team": [
        {
          "LinkedInImg": "string LinkedInImg",
          "description": "string",
          "name": "string"
        }
      ]
    };
    // this.submitData.bind(this);
    this.handleRefresh.bind(this);
    // this.handleAPIResponse.bind(this);

  }

  handleRefresh(key) {
      axios.get(endPoints[key])
      .then((response) => {
        this.setState({key: response.data})
      });
  }

  // handleAPIResponse=(key,data)=>{
  //     if (key==="intro")
  //       this.setState({intro:response.data});
  //     else if (key==="problem")
  //         this.setState({problem:response.data});
  //     else if (key==="solution")
  //         this.setState({solution: response.data})
  //     else if (key==="persona")
  //         this.setState({persona: response.data})
  //     else if (key==="conclusion")
  //         this.setState({conclusion: response.data})
  //     else if (key === "team")
  //         this.setState({team: response.data})
  // }

  submitData=(data)=>{
    console.log(data);
    let handleData = this.handleAPIResponse;
    for (let key in endPoints) {
      console.log(endPoints[key])
      axios.get(endPoints[key], { params: { data: data } })
      .then((response) => {
        console.log(response.data);
        if (key==="intro")
          this.setState({intro:response.data});
        else if (key==="problem")
            this.setState({problem:response.data});
        else if (key==="solution")
            this.setState({solution: response.data})
        else if (key==="persona")
            this.setState({persona: response.data})
        else if (key==="conclusion")
            this.setState({conclusion: response.data})
        else if (key === "team")
            this.setState({team: response.data})
        // handleData(key, response.data);
      });
    }
  }

  function printToSlides() {
    console.log("button pressed");
    // pass data into the function below to send to slides
    handleAuthClick();
  }

  render() {

    return (
      <div className={styles.homeContainer}>
        <div>Home page</div>
        <InputForm submit={this.submitData} />
        <TextAreaSlide title="Intro (slide 1)" section="intro" data={this.state.intro} />

        <TextAreaSlide title="Problem (slide 2)" section="problem" data={this.state.problem} />

        <TextAreaSlide title="Solution (slide 3)" section="solution" data={this.state.solution} />
        <TextAreaSlide title="Persona (slide 4)" section="persona" data={this.state.persona} />
        <TextAreaSlide title="Competitor (slide 5)" section="competitors" data={this.state.competitors} />
        <TextAreaSlide title="Conclusion (slide 6)" section="conclusion" data={this.state.conclusion} />
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
