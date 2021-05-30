import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
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


    handleCompany(e){
        this.setState({company: e.target.value});
    }

    handleProduct(e){
        this.setState({product: e.target.value});
    }

    handleMission(e){
        this.setState({mission: e.target.value});
    }

    handleIndustry(e){
        this.setState({industry: e.target.value});
    }

    handleProblem(e){
        this.setState({problem: e.target.value});
    }

    handleSolution(e){
        this.setState({solution: e.target.value});
    }

    handleUrls(e){
        let urls = [...this.state.linkedinUrls]
        urls[e.target.name] = e.target.value
        this.setState({linkedinUrls: urls});
    }

    addTeamMember(){
        this.setState({linkedinUrls:[...this.state.linkedinUrls, ""]})
    }

    handleSubmit(){
        let data = {company: this.state.company,
                product: this.state.product,
                industry: this.state.industry,
                mission: this.state.mission,
                problem: this.state.problem,
                solution: this.state.solution,
                linkedinUrls: this.state.linkedinUrls}
        this.props.submit(data)
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
                label="Company"
                defaultValue=""
                onChange = {this.handleCompany.bind(this)}
                />
                <TextField
                required
                id="standard-required"
                label="Product"
                defaultValue=""
                onChange = {this.handleProduct.bind(this)}
                />
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
                <IconButton aria-label="add Member" onClick={this.addTeamMember.bind(this)}>
                    <AddIcon/>
                </IconButton>
            </div>
            <Button variant="contained" color="primary" href="#contained-buttons" onClick={this.handleSubmit.bind(this)}>
              Submit
            </Button>
          </form>
        );
    }
}

export default withStyles(styles, { withTheme: true })(InputForm);
