import { hello, murtle, sayHello } from "./functions-and-variables";

describe("functions and variables", () => {
  it("should be able to export a constant string that starts with hello", () => {
    expect(hello).toMatch(/hello/i);
  });

  it("should be able to export a constant object name murtle with the=turtle", () => {
    expect(murtle).toHaveProperty("the", "turtle");
  });

  describe("sayHello", () => {
    ["Jimmy Dean", "Banana", "Butterfly"].forEach((name) => {
      it(`should say hello to ${name}`, () => {
        expect(sayHello(name)).toEqual(`Hello ${name}`);
      });
    });
  });
});
