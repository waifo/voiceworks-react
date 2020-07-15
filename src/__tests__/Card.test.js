import React from "react";
import Enzyme, { shallow } from "enzyme";
import { Card } from "../components";

import { findByTestAttr } from "./utils";

const defaultProps = {
  item: {
    name: "Tank 1",
    type: "Heavy",
    img: "/demo/images/tank-1.jpg",
    country: "India",
    ammunition: ["abc", "def"],
  },
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Card {...setupProps} />);
};

describe("tank card test cases", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-card");

  test("renders without error", () => {
    expect(component.length).toBe(1);
  });

  test("should render tank name", () => {
    const component = findByTestAttr(wrapper, "tank-name");
    expect(component.length).toBe(1);
    expect(component.text()).toBe("Tank 1");
  });

  test("should render tank type", () => {
    const component = findByTestAttr(wrapper, "tank-type");
    expect(component.length).toBe(1);
    expect(component.text()).toBe("HEAVY");
  });

  test("should render tank origin country", () => {
    const component = findByTestAttr(wrapper, "tank-country");
    expect(component.length).toBe(1);
    expect(component.text()).toBe("India");
  });

  test("should validate tank image url", () => {
    const component = findByTestAttr(wrapper, "tank-image");
    expect(component.length).toBe(1);
    expect(component.prop("src")).toBe("/demo/images/tank-1.jpg");
  });

  test("should render ammunition", () => {
    const componentOne = findByTestAttr(wrapper, "tank-ammunition-0");
    const componentTwo = findByTestAttr(wrapper, "tank-ammunition-1");
    expect(componentOne.text()).toBe("abc");
    expect(componentTwo.text()).toBe("def");
  });
});
