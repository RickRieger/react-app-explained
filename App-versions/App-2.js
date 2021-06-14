import React, { Component } from "react";
import "./App.css";
export class App extends Component {
  state = {
    name: "Pikachu",
    initialBackgroundColor: "orange",
    backgroundBoolean: false,
    username: "",
    shouldUpdate: false,
    toggleChild:true,
  };
  // Can use either way of setting state, 
  // constructor(props) and super(props) are
  // optional, only needed when passing props, or 
  // binding functions with out arrow functions


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "Pikachu",
  //     initialBackgroundColor: "orange",
  //     backgroundBoolean: false,
  //     username: "",
  //     shouldUpdate: false,
  //     toggleChild: true,
  //   };
  //   //console.log("1 constructor");
  // }

  // gets called (under the hood) after component was rendered to the DOM
  // only gets fired once! 
  componentDidMount() {
    //console.log("3 componentDidMount");
    this.setState({
      name: "Meow",
      initialBackgroundColor: "blue",
    });
  }
  //gets called (under the hood) if the state was set.
  componentDidUpdate(prevProps, prevState) {
    // console.log("5 componentDidUpdate");
    // console.log("prevState", prevState.name, " Pikachu");
    // console.log("prevState Boolean", prevState.name === "Pikachu");
    // console.log("current State", this.state.name);
    // console.log("-=----------------------");
    if (prevState.name === "Pikachu") {
      //console.log("I RAN LINE 24");
      this.setState({
        name: "Meow",
      });
    }
  }
  // this is a function that was added to the state object
  // and fires when the client input box has text entered
  // kind of strange how we can grab an "event" and pass into the function

  handleOnChanged = (event) => {
    //console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };

  //gets called when submit button is clicked
  //strange behavior now that I updated to add 
  //shouldComponentUpdate function, color doesn't update.--Pak?
  handleShouldUpdate = () => {
    if (this.state.username === "goku") {
      this.setState({
        shouldUpdate: true,
      });
    }
  };


  // gets fired just before a visual change in the browser
  shouldComponentUpdate(nextProps, nextState) {
    //console.log("4 handleShouldUpdate");
    if (nextState.username === "goku") {
      return false;
    } else {
      return true;
    }
  }
  render() {
    //console.log("2 render");
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {this.state.name}
        <div
          style={{
            height: 150,
            backgroundColor: this.state.initialBackgroundColor,
          }}
        ></div>
        <hr />
        <div
          style={{ height: 150 }}
          className={`${
            this.state.backgroundBoolean
              ? "background-color-red"
              : "background-color-green"
          }`}
        >
          <button
            onClick={() =>
              // this.setState({
              //   backgroundBoolean: !this.state.backgroundBoolean,
              // })
              this.setState((prevState) => {
                return {
                  backgroundBoolean: !prevState.backgroundBoolean,
                  name: "Pikachu",
                };
              })
            }
          >
            Change Color
          </button>
        </div>
        <hr />
        <div>
          <input type="text" name="username" onChange={this.handleOnChanged} />
          <button onClick={this.handleShouldUpdate}>Submit</button>
          <br />
          <div
            style={{
              height: 150,
            }}
            className={`${
              this.state.shouldUpdate
                ? "background-color-red"
                : "background-color-green"
            }`}
          >
            Input value : {this.state.username}
          </div>
        </div>
        <hr />
        {this.state.toggleChild ? <Child1 /> : "No Child is shown"}
        {/* {this.state.toggleChild && <Child1 />} */}
        <br />
        <button
          onClick={() =>
            this.setState({ toggleChild: !this.state.toggleChild })
          }
        >
          Toggle Child
        </button>
      </div>
    );
  }
}
class Child1 extends Component {
  state = {
    pokemon: "pikachu",
  };
  // gets called just after component was rendered the 1st time
  componentDidMount() {
   this.timer = window.setTimeout(() => {
      this.setState({
        pokemon: "Mew 2",
      });
    }, 2000); 
  }
  // gets called just before component leaves the dom
  componentWillUnmount() {
    console.log("I AM LEAVING THE DOM!!!");
    //memory leak prevented?
    clearTimeout(this.timer);
  }
  render() {
    return <div>Child Component: {this.state.pokemon}</div>;
  }
}
export default App;