import React from "react";
import ReactDOM from "react-dom";
import { SquareList } from "./SquareList";
import {StarContainer} from "./StarContainer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SquareList />
      <StarContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
