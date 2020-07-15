import React from "react";
import { shallow } from "enzyme";

import Home from "../pages/home.js";
import { findByTestAttr } from "./utils";

const defaultProps = {};

describe("home component test cases", () => {
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Home {...setupProps} />);
  };
  const wrapper = setup();
  it("should render home page", () => {
    const component = findByTestAttr(wrapper, "home-heading");
    expect(component.length).toBe(1);
  });

  it("should render page heading correctly", () => {});
  const component = findByTestAttr(wrapper, "home-heading");
  console.log("component", component);
  expect(component.text()).toBe("Tankomania");
});
