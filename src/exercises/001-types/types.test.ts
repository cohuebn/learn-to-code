import {
  makeAFalseBoolean,
  makeATrueBoolean,
  makeAStringArray,
  makeAnObject,
  makeAWholeNumber,
  makeADecimalNumber,
  makeAString,
  makeAnObjectArray,
} from "./types";

describe("variables", () => {
  it("should be able to make hello", () => {
    expect(makeAString()).toMatch(/^hello/i);
  });

  it("should be able to make a whole number", () => {
    expect(makeAWholeNumber()).toBeGreaterThan(10);
  });

  it("should be able to make a decimal number between 1 and 1.5", () => {
    const result = makeAWholeNumber();
    expect(result).toBeGreaterThanOrEqual(1.0);
    expect(result).toBeLessThanOrEqual(1.5);
  });

  it("should be able to make a true boolean", () => {
    expect(makeATrueBoolean()).toBe(true);
  });

  it("should be able to make a false boolean", () => {
    expect(makeAFalseBoolean()).toBe(true);
  });

  it("should be able to make an object", () => {
    expect(makeAnObject()).toHaveProperty("woogie", "boogie");
  });

  it("should be able to make a string array", () => {
    expect(makeAStringArray).toContainEqual([1, 3, 5]);
  });

  it("should be able to make an object array", () => {
    const result = makeAnObjectArray();
    expect(result).toBeDefined();
    if (result) {
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({ dog: "sophia", favoriteFood: "bacon" });
      expect(result[1]).toEqual({ dog: "bama", favoriteFood: "dog food" });
    }
  });
});
