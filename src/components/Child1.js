import React, { Component } from 'react'

export class Child extends Component {

constructor(props) {
  super(props)
  this.state = {
  }
}
  render() {
    return (
      <div>
        Hi, my name is {this.props.name} and my age is {this.props.age}
      </div>
    )
  }
}

export default Child
