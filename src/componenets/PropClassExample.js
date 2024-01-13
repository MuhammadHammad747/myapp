import React, { Component } from 'react'

export default class PropClassExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
           name:this.props.name,
           email:this.props.email
        }
      }

  render() {
    function ChangeName(){
this.setState({name:this.state.name="Hammad Shakoor"})
this.setState({name:this.state.email="HammadShakoor@gmail.com"})
    }
    return (
      <div>
        <h1>This is Example of Props With Class </h1>
        <h2>{this.props.name}</h2>
        <h3>{this.props.email}</h3>
        <button onClick={this.ChangeName}> Change Name</button>

      </div>
    )
  }
}
