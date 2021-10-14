import React from "react";
import ReactDOM, { hydrate, render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}