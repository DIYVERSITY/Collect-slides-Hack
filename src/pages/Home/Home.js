import React, {Component} from "react";
import axios from 'axios';
import InputForm from "../../components/InputForm/InputForm.js";


const endPoints = {
    all: 'https://537946d0b176.ngrok.io/',
    intro: 'https://537946d0b176.ngrok.io/intro',
    problem: 'https://537946d0b176.ngrok.io/problem',
    solution: 'https://537946d0b176.ngrok.io/solution',
    persona: 'https://537946d0b176.ngrok.io/persona',
    conclusion: 'https://537946d0b176.ngrok.io/conclusion',
    team: 'https://537946d0b176.ngrok.io/team'
}
class Home extends Component{
    constructor(props){
        super(props);
        this.state={};
        this.submitData.bind(this);
    }

    submitData(data){
        console.log(data);
        for(let key in  endPoints){
            axios.get(endPoints[key], {params: {data : data}})
            .then(response => {
                console.log(key, response.data);
            })
        };
    }

    render(){
        return (
          <div>
            <div>Home page</div>
            <InputForm submit={this.submitData}/>
          </div>
        );
    }
}

export default Home;
