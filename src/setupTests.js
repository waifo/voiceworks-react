// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// import "@testing-library/jest-dom/extend-expect";

import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });
