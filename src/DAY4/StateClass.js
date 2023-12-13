import React,{Component} from "react";

export default class StateClass extends Component
{
    state = {
        name : "ARCHANA",
        player : "PANT"
    }
    handleChange = () => {this.setState({name:"ABI", player:"VIRAT"})}
    render()
    {
        return(
        <div>
            <p>{this.state.name} is {this.state.player} fan.</p>
            <button onClick={this.handleChange}>CLICK</button>
        </div>
        )
    }
}