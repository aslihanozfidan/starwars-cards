import React, { Component } from "react";
import "./App.css";
import Routes from "./routes.js";
import Header from "./containers/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
