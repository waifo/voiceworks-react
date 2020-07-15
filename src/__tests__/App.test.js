import React from "react";
// import { render } from "@testing-library/react";
import { mount } from "enzyme";
import App from "../App";

describe("App component test cases", () => {
  it("should render correctly", () => {
    mount(<App />);
  });
});
