import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import styles from "./InputForm.module.css";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "DIYversity",
      product: "Collect It Presenter",
      industry: "Startups",
      mission:
        "We help other startups focus more on important work while our AI takes care of their Slide Decks.",
      problem:
        "It's hard to come up with ideas and takes too long to make slides.",
      solution:
        "Make Pitch Decks and Case Study Slides fast, easier, and smarter.",
      teamCount: 2,
      linkedinUrls: ["Rene", "Danielle", "Eric", "Mr T"],
    };
  }

  handleCompany(e) {
    this.setState({ company: e.target.value });
  }

  handleProduct(e) {
    this.setState({ product: e.target.value });
  }

  handleMission(e) {
    this.setState({ mission: e.target.value });
  }

  handleIndustry(e) {
    this.setState({ industry: e.target.value });
  }

  handleProblem(e) {
    this.setState({ problem: e.target.value });
  }

  handleSolution(e) {
    this.setState({ solution: e.target.value });
  }

  handleUrls(e) {
    let urls = [...this.state.linkedinUrls];
    urls[e.target.name] = e.target.value;
    this.setState({ linkedinUrls: urls });
  }

  addTeamMember() {
    this.setState({ linkedinUrls: [...this.state.linkedinUrls, ""] });
  }

  handleSubmit = () => {
    let data = {
      company: this.state.company,
      product: this.state.product,
      industry: this.state.industry,
      mission: this.state.mission,
      problem: this.state.problem,
      solution: this.state.solution,
      linkedinUrls: this.state.linkedinUrls,
    };
    this.props.submit(data);
  };

  render() {
    let teamMemebers = this.state.linkedinUrls.map((item, index) => (
      <div className={styles.formRow} key={index}>
        Team Member {index + 1}
        <textarea
          className={styles.textField}
          onChange={this.handleUrls.bind(this)}
        ></textarea>
      </div>
    ));
    return (
      <div>
        <div className={styles.formContainer}>
          <div className={styles.formRow}>
            <div>
              <div>Company</div>
              <textarea
                className={styles.textField}
                onChange={this.handleCompany.bind(this)}
                value={this.state.company}
              ></textarea>
            </div>
            <div>
              <div>Product</div>
              <textarea
                className={styles.textField}
                onChange={this.handleProduct.bind(this)}
                value={this.state.product}
              ></textarea>
            </div>
          </div>
          <div className={styles.formRow}>
            <div>
              <div>Industry</div>
              <textarea
                className={styles.textField}
                onChange={this.handleIndustry.bind(this)}
                value={this.state.industry}
              ></textarea>
            </div>
            <div>
              <div>Mission</div>
              <textarea
                className={styles.textField}
                onChange={this.handleMission.bind(this)}
                value={this.state.mission}
              ></textarea>
            </div>
          </div>

          <div className={styles.formRow}>
            <div>
              <div>Problem</div>
              <textarea
                className={styles.textField}
                onChange={this.handleProblem.bind(this)}
                value={this.state.problem}
              ></textarea>
            </div>
            <div>
              <div>Solution</div>
              <textarea
                className={styles.textField}
                onChange={this.handleSolution.bind(this)}
                value={this.state.solution}
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          {teamMemebers}
          <IconButton
            color="inherit"
            aria-label="add Member"
            onClick={this.addTeamMember.bind(this)}
          >
            <AddIcon />
          </IconButton>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.submitBtn} onClick={this.handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default InputForm;
