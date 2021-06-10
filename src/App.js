import React, { Component } from "react";
import "./App.css";




export class App extends Component {
    state = {
    name: "Pikachu",
    initialBackgroundColor: "orange",
    backgroundBoolean: false,
}

  componentDidMount() {
    this.setState({
      name: "Meow",
      initialBackgroundColor: "blue",
    });
  }

  componentDidUrpdate(prevProps, prevState) {
    console.log("prevState", prevState.name, " Pikachu");
    console.log("prevState Boolean", prevState.name === "Pikachu");
    console.log("current State", this.state.name);
    console.log("-----------------------");
    if (prevState.name === "Pikachu") {
      console.log("I RAN LINE 2");
      this.setState({
        name: "Meow",
      });
    }
  }
  render() {
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
      </div>
    );
  }
}
export default App;