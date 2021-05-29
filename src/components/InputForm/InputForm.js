import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "70ch"
    },

    "& .MuiButton-root":{
      margin: theme.spacing(2)
    },
    margin: theme.spacing(1)
  }
});

class InputForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            teamCount: 2,
            linkedinUrls:["", ""]
        }
    }

    handleMission(e){
        console.log(e.target.value);
        this.setState({mission: e.target.value});
    }

    handleIndustry(e){
        console.log(e.target.value);
        this.setState({industry: e.target.value});
    }

    handleProblem(e){
        console.log(e.target.value);
        this.setState({problem: e.target.value});
    }

    handleSolution(e){
        console.log(e.target.value);
        this.setState({solution: e.target.value});
    }

    handleUrls(e){
        console.log(e.target.value, e.target.name);
        let urls = [...this.state.linkedinUrls]
        urls[e.target.name] = e.target.value
        this.setState({linkedinUrls: urls});
    }

    render() {
        const { classes } = this.props;
        let teamMemebers = this.state.linkedinUrls.map((item, index)=>(
                            <TextField
                            required
                            key={index}
                            id="standard-required"
                            label={"Team Member "+index}
                            defaultValue={item}
                            name = {index}
                            onChange = {this.handleUrls.bind(this)}
                            />
                            ));
        return (
          <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                required
                id="standard-required"
                label="Industry"
                defaultValue=""
                onChange = {this.handleIndustry.bind(this)}
                />
                <TextField
                required
                id="standard-required"
                label="Mission"
                defaultValue=""
                onChange = {this.handleMission.bind(this)}
                />
                <TextField
                required
                id="standard-required"
                label="Problem"
                defaultValue=""
                onChange = {this.handleProblem.bind(this)}
                />
                <TextField
                required
                id="standard-required"
                label="Solution"
                defaultValue=""
                onChange = {this.handleSolution.bind(this)}
                />
            </div>
            <div>
                {teamMemebers}
            </div>
            <Button variant="contained" color="primary" href="#contained-buttons">
              Submit
            </Button>
          </form>
        );
    }
}

export default withStyles(styles, { withTheme: true })(InputForm);
