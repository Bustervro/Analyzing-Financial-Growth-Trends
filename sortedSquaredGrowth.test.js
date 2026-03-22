const sortedSquaredGrowth = require("../src/sortedSquaredGrowth");

describe("sortedSquaredGrowth", () => {
  // Normal cases
  test("handles mixed negative and positive values", () => {
    expect(sortedSquaredGrowth([-5, -2, 0, 3, 10])).toEqual([0, 4, 9, 25, 100]);
  });

  test("handles another mixed input", () => {
    expect(sortedSquaredGrowth([-8, -3, 2, 4, 12])).toEqual([4, 9, 16, 64, 144]);
  });

  test("handles already non-negative values", () => {
    expect(sortedSquaredGrowth([0, 1, 2, 3, 4])).toEqual([0, 1, 4, 9, 16]);
  });

  // Edge cases
  test("handles empty array", () => {
    expect(sortedSquaredGrowth([])).toEqual([]);
  });

  test("handles single element", () => {
    expect(sortedSquaredGrowth([-7])).toEqual([49]);
  });

  test("handles all negative values", () => {
    expect(sortedSquaredGrowth([-9, -7, -3, -1])).toEqual([1, 9, 49, 81]);
  });

  test("handles duplicate values", () => {
    expect(sortedSquaredGrowth([-2, -2, 0, 2, 2])).toEqual([0, 4, 4, 4, 4]);
  });

  test("handles all zeros", () => {
    expect(sortedSquaredGrowth([0, 0, 0])).toEqual([0, 0, 0]);
  });
});
