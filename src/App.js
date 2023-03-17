import "./styles.css";
import DataFetching from "./DataFetching";
import React from "react";
import ReactDOM from "react-dom";

export default function App() {
  return (
    <div className="App">
      <h1 className="navBar">Ye</h1>
      <div id="case4" class="cd-case">
        <div className="album-art3" id="art">
          <div className="sup pos-tl"></div>
          <div className="sup pos-tr"></div>
          <div className="sup pos-bl"></div>
          <div className="sup pos-br"></div>
        </div>
        <div class="spine"></div>
      </div>
      <DataFetching />
    </div>
  );
}
