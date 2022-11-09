import { hello, murtle, sayHello } from "./functions-and-variables";

describe("functions and variables", () => {
  it("should be able to export a constant string that starts with hello", () => {
    expect(hello).toMatch(/hello/i);
  });

  it("should be able to export a constant object name murtle with the=turtle", () => {
    expect(murtle).toHaveProperty("the", "turtle");
  });

  describe("sayHello", () => {
    it(`should say hello to Jimmy Dean`, () => {
      expect(sayHello("Jimmy Dean")).toEqual("Hello Jimmy Dean");
    });

    it(`should say hello to Banana`, () => {
      expect(sayHello("Banana")).toEqual("Hello Banana");
    });

    it(`should say hello to Butterfly`, () => {
      expect(sayHello("Butterfly")).toEqual("Hello Butterfly");
    });
  });
});
