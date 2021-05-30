import React, {Component} from "react";
import styles from "./TextAreaSlide.module.css";
import RefreshIcon from "@material-ui/icons/Refresh";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "70ch"
    },
    margin: theme.spacing(1)
  }
});

class TextAreaSlide extends Component {

  constructor(props){
      super(props);
      this.refreshSlide.bind(this);
  }

  refreshSlide(){
    console.log("refresh slide button pressed");
  };

  render(){
      const { classes } = this.props;
      let listitems;
      if (this.props.section==="competitors"){
          listitems = this.props.data.map((item)=>(
              <div>
                  <TextField
                  required
                  id="standard-required"
                  label="Name"
                  defaultValue={item.name}
                  value={item.name}
                  />
                <textarea className={styles.text_area} value={item.description}></textarea>
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
          {this.props.section==="problem" || this.props.section==="solution" || this.props.section==="conclusion" ? (
              <textarea className={styles.text_area} value={this.props.data[this.props.section]}></textarea>
          ): this.props.section==="persona"?(
              <div>
                  <TextField
                  required
                  id="standard-required"
                  label="Name"
                  defaultValue={this.props.data.name}
                  value = {this.props.data.name}
                  />
                  <TextField
                  required
                  id="standard-required"
                  label="age"
                  defaultValue={this.props.data.age}
                  value = {this.props.data.age}
                  />
                  <textarea className={styles.text_area} value={this.props.data.needs}></textarea>
                  <textarea className={styles.text_area} value={this.props.data.pains}></textarea>
                  <textarea className={styles.text_area} value={this.props.data.scenario}></textarea>
              </div>
          ): this.props.section==="intro"?(
              <div>
                  <TextField
                  required
                  id="standard-required"
                  label="title"
                  defaultValue={this.props.data.title}
                  value = {this.props.data.title}
                  />
                  <textarea className={styles.text_area} value={this.props.data.mission}></textarea>
              </div>
          ): this.props.section==="competitors"?(
              <div>
                {listitems}
              </div>
          ):(<div></div>)}
        </div>
      );
  }
}

export default withStyles(useStyles, { withTheme: true })(TextAreaSlide);
