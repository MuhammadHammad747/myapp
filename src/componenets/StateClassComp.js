import React, { Component } from 'react'

export default class StateClassComp extends Component {
    constructor(props) {
      super(props)

      this.state = {
         data:0
      }
    }
ChangeName = () => {
    this.setState({data:this.state.data+1});
}
  render() {
    return (
      <div>
<h1>Change Name With Class Components {this.state.data}</h1>
<button onClick={this.ChangeName}>Change Name Class Component</button>
      </div>
    )
  }
}
