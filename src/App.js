import React, { Component } from 'react'
import Header from "./components/Header/Header"
import ToDo from "./components/ToDo/Todo"
export class App extends Component {
  render() {
    
    return (
      <div>
      <Header />
        <ToDo />
      </div>
    )
  }
}

export default App
  