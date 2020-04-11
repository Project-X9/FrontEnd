import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import "jest-enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "./LogIn";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
