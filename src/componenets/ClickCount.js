// Higher Order Components



import React, { Component } from 'react'

export default class ClickCount extends Component {
    constructor(props) {
      super(props)

      this.state = {
         count:0

      };
    }
    UpdateClick = () => {
        this.setState({ count: this.state.count + 1 });
       };
  render() {
   const {count}=this.state

    return (
      <div>
   <button onClick={this.UpdateClick}>Clicked {count} time </button>
      </div>
    )
  }
}
