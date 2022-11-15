// import { addThreeNumbers, hasMoreThanThreeLetters } from "./more-functions";
import { addThreeNumbers, levisBananaFactory } from "./more-functions";

describe("more functions", () => {
  describe("addThreeNumbers", () => {
    it("should add 0, 0, and 0", () => {
      expect(addThreeNumbers(0, 0, 0)).toBe(0);
    });

    it("should add 1, 2, and 3", () => {
      expect(addThreeNumbers(1, 2, 3)).toBe(6);
    });

    it("should add 1234, 5678, and 9012", () => {
      expect(addThreeNumbers(1234, 5678, 9021)).toBe(15933);
    });
  });

  describe("levisBananaFactory", () => {
    it("should return true when banana is 10", () => {
      expect(levisBananaFactory(10)).toBe(true);
    });

    it("should return true when banana is divisible by 10", () => {
      expect(levisBananaFactory(20)).toBe(true);
    });

    it("should return false when banana is not divisible by 10", () => {
      expect(levisBananaFactory(35)).toBe(false);
    });
  });

  // describe("hasMoreThanThreeLetters", () => {
  //   it("should return false for uno", () => {
  //     expect(hasMoreThanThreeLetters("uno")).toBe(false);
  //   });

  //   it("should return false for 'to'", () => {
  //     expect(hasMoreThanThreeLetters("to")).toBe(false);
  //   });

  //   it("should return true for banana", () => {
  //     expect(hasMoreThanThreeLetters("banana")).toBe(true);
  //   });
  // });
});
