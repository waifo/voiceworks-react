import React from "react";
import { mount } from "enzyme";

import { Dropdown } from "../components/common";
import { findByTestAttr } from "./utils";

const defaultProps = {
  items: ["one", "two", "three"],
  label: "country",
  onChange: jest.fn(),
};
describe("dropdown test cases", () => {
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return mount(<Dropdown {...setupProps} />);
  };

  const wrapper = setup(defaultProps);

  it("should render correctly", () => {
    expect(wrapper.find("select").length).toBe(1);
  });

  it("should render options correctly", () => {
    expect(wrapper.find("option").length).toBe(4);
  });
});

// describe("to test dropdown functionality", () => {
//   const mockFunc = jest.fn();
//   const options = ["a", "b", "c", "d"];
//   const wrapper = mount(
//     <Dropdown label="the-label" items={options} onChange={mockFunc} />
//   );

//   it("should call action prop with correct input value as arguments when the input is changed", () => {
//     wrapper.find("select").simulate("change", { target: { value: "a" } });
//     expect(mockFunc.mock.calls[0][0].value).toEqual("a");
//   });
// });
