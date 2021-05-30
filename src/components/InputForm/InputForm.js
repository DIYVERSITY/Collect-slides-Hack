import React, { Component } from "react";
// import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
// import Button from "@material-ui/core/Button";
// import { withStyles } from "@material-ui/core/styles";
import styles from "./InputForm.module.css";

// const styles = (theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(2),
//       width: "70ch",
//     },

//     "& .MuiButton-root": {
//       margin: theme.spacing(2),
//     },
//     margin: theme.spacing(1),
//   },
// });

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamCount: 2,
      linkedinUrls: ["", ""],
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
    // const { classes } = this.props;
    let teamMemebers = this.state.linkedinUrls.map((item, index) => (
      <div className={styles.formRow} key={index}>
        {/* <TextField
          required
          key={index}
          id="standard-required"
          label={"Team Member " + index}
          defaultValue={item}
          // name={index}
          onChange={this.handleUrls.bind(this)}
        /> */}
        Team Member {index}
        <textarea
          className={styles.textField}
          onChange={this.handleUrls.bind(this)}
        ></textarea>
      </div>
    ));
    return (
      // <form className={classes.root} noValidate autoComplete="off">
      // <form noValidate autoComplete="off">
      <div>
        <div className={styles.formContainer}>
          <div className={styles.formRow}>
            <div>
              <div>Company</div>
              <textarea
                className={styles.textField}
                onChange={this.handleCompany.bind(this)}
              ></textarea>
            </div>
            <div>
              <div>Product</div>
              <textarea
                className={styles.textField}
                onChange={this.handleProduct.bind(this)}
              ></textarea>
            </div>

            {/* <TextField
              className={styles.textField}
              required
              id="company-id"
              label="Company"
              defaultValue=""
              onChange={this.handleCompany.bind(this)}
            />
            <TextField
              required
              id="product-id"
              label="Product"
              defaultValue=""
              onChange={this.handleProduct.bind(this)}
            /> */}
          </div>
          <div className={styles.formRow}>
            <div>
              <div>Industry</div>
              <textarea
                className={styles.textField}
                onChange={this.handleIndustry.bind(this)}
              ></textarea>
            </div>
            <div>
              <div>Mission</div>
              <textarea
                className={styles.textField}
                onChange={this.handleMission.bind(this)}
              ></textarea>
            </div>

            {/* <TextField
              required
              id="industry-id"
              label="Industry"
              defaultValue=""
              onChange={this.handleIndustry.bind(this)}
            />
            <TextField
              required
              id="mission-id"
              label="Mission"
              defaultValue=""
              onChange={this.handleMission.bind(this)}
            /> */}
          </div>

          <div className={styles.formRow}>
            <div>
              <div>Problem</div>
              <textarea
                className={styles.textField}
                onChange={this.handleProblem.bind(this)}
              ></textarea>
            </div>
            <div>
              <div>Solution</div>
              <textarea
                className={styles.textField}
                onChange={this.handleSolution.bind(this)}
              ></textarea>
            </div>
            {/* <TextField
              required
              id="problem-id"
              label="Problem"
              defaultValue=""
              onChange={this.handleProblem.bind(this)}
            />
            <TextField
              required
              id="solution-id"
              label="Solution"
              defaultValue=""
              onChange={this.handleSolution.bind(this)}
            /> */}
          </div>
        </div>
        <div>
          {teamMemebers}
          <IconButton
            aria-label="add Member"
            onClick={this.addTeamMember.bind(this)}
          >
            <AddIcon />
          </IconButton>
        </div>
        {/* <Button
          variant="contained"
          color="primary"
          href="#contained-buttons"
          onClick={this.handleSubmit.bind(this)}
        >
          Submit
        </Button> */}
        <div className={styles.buttonContainer}>
          <button className={styles.submitBtn} onClick={this.handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

// export default withStyles(styles, { withTheme: true })(InputForm);
export default InputForm;
