import React, { Component } from 'react'

export default class ErrorBrondarieshero extends Component {
    state = {
        hasError:false
    }

    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
  render() {
    if(this.state.hasError === true)
    {
       return <h1>ERROR OCCURED</h1>
    }
    return this.props.children;
  }
}
