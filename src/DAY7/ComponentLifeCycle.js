import React, { Component } from 'react'

export default class ComponentLifeCycle extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            favColor:"Red"
        }
    }

    componentDidMount()
    {
        setTimeout(() => {this.setState({favColor:"black"})}, 5000)
    }

    shouldComponentUpdate()
    {
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevColor)
    {
       document.getElementById("id1"). innerHTML = "Previous Color" + prevColor.favColor;
    }

    componentDidUpdate()
    {
       document.getElementById("id2"). innerHTML = "Current Color" + this.state.favColor;
    }

  render() {
    return (
      <div>
        <h1>{this.state.favColor}</h1>
        <p id='id1'></p>
        <p id='id2'></p>
      </div>
    )
  }
}
