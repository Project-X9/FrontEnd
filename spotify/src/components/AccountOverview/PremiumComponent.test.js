import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import PremiumPlan from "./PremiumPlan";

configure({ adapter: new Adapter() });
describe("<PremiumPlan />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PremiumPlan />);
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <PremiumPlan />
      </Router>,
      div
    );
  });
});
