import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Card } from "../components";

import { findByTestAttr } from "./utils";

const defaultProps = {
  item: { name: "", type: "", img: "", country: "", ammunition: [] },
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Card {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-card");
  expect(component.length).toBeGreaterThan(0);
});
