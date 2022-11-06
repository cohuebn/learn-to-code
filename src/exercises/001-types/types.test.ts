import {
  makeAFalseBoolean,
  makeATrueBoolean,
  makeAnObject,
  makeAWholeNumber,
  makeADecimalNumber,
  makeAString,
  makeANumberArray,
  makeAnObjectArray,
} from "./types";

describe("variables", () => {
  it("should be able to make a string starting with 'hello'", () => {
    expect(makeAString()).toMatch(/^hello/i);
  });

  it("should be able to make a whole number greater than 10", () => {
    expect(makeAWholeNumber()).toBeGreaterThan(10);
  });

  it("should be able to make a decimal number between 1 and 1.5", () => {
    const result = makeADecimalNumber();
    expect(result).toBeGreaterThanOrEqual(1.0);
    expect(result).toBeLessThanOrEqual(1.5);
  });

  it("should be able to make a true boolean", () => {
    expect(makeATrueBoolean()).toBe(true);
  });

  it("should be able to make a false boolean", () => {
    expect(makeAFalseBoolean()).toBe(false);
  });

  it("should be able to make an object with the property woogie=boogie", () => {
    expect(makeAnObject()).toHaveProperty("woogie", "boogie");
  });

  it("should be able to make a number array with at least 1, 3, and 5", () => {
    expect(makeANumberArray()).toEqual(expect.arrayContaining([1, 3, 5]));
  });

  it("should be able to make array with 2 objects. 1 object should be have name=sophia whose favoriteFood=bacon", () => {
    const result = makeAnObjectArray();
    expect(result).toBeDefined();
    if (result) {
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveProperty("name", "sophia");
      expect(result[0]).toHaveProperty("favoriteFood", "bacon");
    }
  });
});
