// import { addThreeNumbers, hasMoreThanThreeLetters } from "./more-functions";
import { addThreeNumbers } from "./more-functions";

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
