export function example() {
  // A string is just a bunch of letters. It can be real words or just letters and numbers together
  const aString = "i'm a string of text 1234!?";
  // A number can be a whole number or a decimal
  const aWholeNumber = 1234;
  const aDecimalNumber = 1234.567;
  // A boolean is either true or false
  const trueBoolean = true;
  const falseBoolean = false;
  // An object is a way to put multiple properties together
  const anObject = {
    name: "Cory Robert Huebner",
    yearOfBirth: 1986,
  };
  // An array is a list of values. It can be an array of strings, numbers, booleans, objects, etc.
  const aStringArray = ["a", "b", "c"];
  const anObjectArray = [
    { a: 1, b: 2 },
    { c: 1, d: 2 },
  ];
  return {
    aString,
    aWholeNumber,
    aDecimalNumber,
    trueBoolean,
    falseBoolean,
    anObject,
    aStringArray,
    anObjectArray,
  };
}

export function makeAString(): string | undefined {
  return "Hello banana";
}

export function makeAWholeNumber(): number | undefined {
  return 100000000000;
}

export function makeADecimalNumber(): number | undefined {
  return 1.5;
}

export function makeATrueBoolean(): boolean | undefined {
  return true;
}

export function makeAFalseBoolean(): boolean | undefined {
  return false;
}

export function makeAnObject(): object | undefined {
  return { woogie: "boogie", ate: "banana" };
}

export function makeANumberArray(): number[] {
  return [1, 3, 5, 100, 200, 400, 500, 1100, 1000000090000];
}

type Dog = {
  name: string;
  favoriteFood: string;
};

export function makeAnObjectArray(): Dog[] {
  return [
    { name: "sophia", favoriteFood: "bacon" },
    { name: "fluffy", favoriteFood: "cheeseburgers" },
  ];
}
