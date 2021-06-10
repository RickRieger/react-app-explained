import React, { Component } from 'react'

export class Child extends Component {

constructor(props) {
  super(props)
  console.log(props)
  this.state = {
     
  }
}


  render() {
    return (
      <div>
        Hi, my name is {this.props.name}
      </div>
    )
  }
}

export default Child
