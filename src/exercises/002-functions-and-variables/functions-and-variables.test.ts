import { helloConst, murtle, sayHello } from "./functions-and-variables";

describe("functions and variables", () => {
  it("should be able to export a constant string that starts with hello", () => {
    expect(helloConst).toMatch(/hello/i);
  });

  it("should be able to export a constant object with murtle=theturtle", () => {
    expect(murtle).toHaveProperty("murtle", "theturtle");
  });

  describe("sayHello", () => {
    ["Jimmy Dean", "Banana", "Butterfly"].forEach((name) => {
      it(`should say hello to ${name}`, () => {
        expect(sayHello(name)).toEqual(`Hello ${name}`);
      });
    });
  });
});
