import React, { Component } from "react";
import styles from "./TextAreaSlide.module.css";
import RefreshIcon from "@material-ui/icons/Refresh";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "70ch",
    },
    margin: theme.spacing(1),
  },
});

class TextAreaSlide extends Component {
  constructor(props) {
    super(props);
    this.refreshSlide.bind(this);
  }

  refreshSlide() {
    console.log("refresh slide button pressed");
  }

  render() {
    // const { classes } = this.props;
    let listitems;
    if (this.props.section === "competitors") {
      listitems = this.props.data.map((item, index) => (
        <div key={index}>
          <TextField
            required
            id="standard-required"
            label="Name"
            // defaultValue={item.name}
            value={item.name}
          />
          <textarea
            className={styles.text_area}
            value={item.description}
            readOnly
          ></textarea>
        </div>
      ));
    }
    return (
      <div className={styles.container}>
        <div className={styles.title_container}>
          <div className={styles.title}>{this.props.title}</div>
          <button onClick={this.refreshSlide}>
            <RefreshIcon />
          </button>
        </div>
        {this.props.section === "problem" ||
        this.props.section === "solution" ||
        this.props.section === "conclusion" ? (
          <textarea
            className={styles.text_area}
            value={this.props.data[this.props.section]}
            readOnly
          ></textarea>
        ) : this.props.section === "persona" ? (
          <div>
            <div className={styles.textRow2}>
              Name
              <textarea
                className={styles.smallText}
                // value={this.props.data.age}
              ></textarea>
              {/* <TextField
              required
              id="persona-name-id"
              label="Name"
              // defaultValue={this.props.data.name}
              value={this.props.data.name}
            /> */}
              Age
              <textarea
                className={styles.smallText}
                // value={this.props.data.age}
              ></textarea>
              {/* <TextField
              required
              id="persona-age-id"
              label="age"
              // defaultValue={this.props.data.age}
              value={this.props.data.age}
            /> */}
            </div>
            <textarea
              className={styles.text_area}
              value={this.props.data.needs}
              readOnly
            ></textarea>
            <textarea
              className={styles.text_area}
              value={this.props.data.pains}
              readOnly
            ></textarea>
            <textarea
              className={styles.text_area}
              value={this.props.data.scenario}
              readOnly
            ></textarea>
          </div>
        ) : this.props.section === "intro" ? (
          <div>
            <div className={styles.textRow1}>
              Name
              <textarea
                className={styles.smallText}
                // value={this.props.data.age}
              ></textarea>
            </div>
            {/* <TextField
              required
              id="title-id"
              label="title"
              // defaultValue={this.props.data.title}
              value={this.props.data.title}
            /> */}
            <textarea
              className={styles.text_area}
              value={this.props.data.mission}
              readOnly
            ></textarea>
          </div>
        ) : this.props.section === "competitors" ? (
          <div>{listitems}</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(TextAreaSlide);
