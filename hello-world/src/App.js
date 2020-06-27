import React from "react";
import logo from "./logo.svg";
import "./App.css";

// import { Greet } from "./components/greet"; //* for without default export

import Greet from "./components/greet";

function App() {
  return (
    <div className="App">
      <Greet></Greet>
    </div>
  );
}

export default App;
