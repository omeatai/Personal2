import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "rice",
      quantity: 10,
      unit: "grams",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Cook App</h1>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default App;
