import filterData from "../utils/filterData";

describe("filterData util function", () => {
  const data = [
    { a: "test", x: "lorem" },
    { b: "data", y: "ipsum", x: "lorem" },
  ];
  const filter = { y: "ipsum" };

  test("it should be a function", () => {
    expect(filterData).toBeInstanceOf(Function);
  });

  test("it should return something", () => {
    expect(filterData()).toBeDefined();
    expect(filterData(data)).toBeDefined();
  });

  test("it should return original data if filter is empty object", () => {
    expect(filterData(data)).toStrictEqual(data);
  });

  test("it should return correct data after applying filter", () => {
    expect(filterData(data, filter)).toStrictEqual([
      { b: "data", y: "ipsum", x: "lorem" },
    ]);
  });
});
