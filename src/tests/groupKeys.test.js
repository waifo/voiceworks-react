import { groupKeys } from "../utils";

describe("groupKeys util function", () => {
  const data = [
    { a: "test", x: "lorem" },
    { b: "data", y: "ipsum", x: "lorem" },
  ];
  const filter = { y: "ipsum" };

  test("it should be a function", () => {
    expect(groupKeys).toBeInstanceOf(Function);
  });

  test("it should return something", () => {
    expect(groupKeys()).toBeDefined();
    expect(groupKeys(data)).toBeDefined();
  });
});
