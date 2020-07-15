import groupKeys from "../utils/groupKeys";

describe("groupKeys util function", () => {
  const data = [
    { a: "test", x: "lorem" },
    { b: "data", y: "ipsum", x: "dorium" },
  ];

  test("it should be a function", () => {
    expect(groupKeys).toBeInstanceOf(Function);
  });

  test("it should return something", () => {
    expect(groupKeys()).toBeDefined();
    expect(groupKeys(data)).toBeDefined();
  });

  test("it should return correct data after grouping", () => {
    expect(groupKeys(data)).toStrictEqual({
      a: ["test"],
      x: ["lorem", "dorium"],
      b: ["data"],
      y: ["ipsum"],
    });
  });
});
