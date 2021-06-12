//bringing in react and Component (destructuring) from react
import React, { Component } from "react";
//import css
import "./App.css";
//import child1.js
import Child1 from './components/Child1'
//instantiates a react component, using a class- "export class (name) extends Component"
//extends,constructor and super are all required for 
//inheriting the properties from 'component' or setting this.state
//within the component.
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      toggleMe: false,
    };
    //using .bind is one way of "binding" a function to 
    //a component, another way is the arrow function, 
    //as in minusCount below.
    this.addCount = this.addCount.bind(this);
  }
  addCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  minusCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  //two ways to toggle between a boolean, 
  //the second example is preferable.(un-commented version)
  toggleMeColor = () => {
    // this.setState({
    //   toggleMe: !this.state.toggleMe,
    // });
    this.setState((prevState) => {
      return {
        toggleMe: !prevState.toggleMe,
      };
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <div>Count: {this.state.count}</div>
        <button onClick={this.minusCount}>-</button>
        <button onClick={this.addCount}>+</button>
        <hr />
        <div style={styles.divStyle}>
          <h1 style={styles.h1Style}>Hello, class!</h1>
        </div>
        <hr />
        <div
          className={`toggle-me-div ${
            this.state.toggleMe
              ? "toggle-me-original"
              : "toggle-me-not-original"
          }`}
        >
          <button onClick={this.toggleMeColor}>Toggle Me</button>

         
        </div>
        <hr/>
          <Child1 name="joe" age ={99}/>
          <Child1 name="jackie" age = {500}/>
          <Child1 name="mike" age = {321}/>
      </div>
    );
  }
}


const styles = {
  divStyle: {
    height: "150px",
    backgroundColor: "yellow",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  h1Style: {
    color: "green",
  },
};


export default App;