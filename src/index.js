import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './core/app'


const wrapper = document.getElementById("app")

render(<App />, wrapper);
