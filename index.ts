/*
 * NUMBER
 */
// All the types in typescript
// number, boolean, string, null, undefined, void, never, symbol, any, unknown, any, Array.

let x: number = 1;
let y: number = 1;
let z: number = x + y;

// OBJECT
let object: object = {
  name: "object",
  age: 1,
};

// TUPLE
let actor: { name: string; age: number } = { name: "lav", age: 20 };
let actor2: { name: string; age?: number } = { name: "lav" };

// ############### ARRAY ############### //

// any[]
let array1: any[] = [1, {}, "3"];
let array2: Array<any> = [1, {}, "3"];

// number[]
let array3: number[] = [1, 2, 3];
let array4: Array<number> = [1, 2, 3];

// boolean[]
let array5: boolean[] = [true, false];
let array6: Array<boolean> = [true, false];

// object[]
let array7: object[] = [{}, {}];
let array8: Array<object> = [{}, {}];

// ############### FUNCTION ############### //

const sum = (a: number, b: number): number => a + b;
const plusString = (a: number, b: number): string => String(a + b);

// function type ,tạo prototype hoặc có thể gọi là template.
type functionType = (a: number, b: number) => number;
const sumWithFunctionType: functionType = (a: number, b: number) => a + b;

const log = (string_data): void => console.log(string_data);

// ############### UNION TYPE AND ENUM TYPE ############### //
// union
let size: string | number;
size = "XL";
size = 10;

let strobj: object | string;
strobj = "string";
strobj = {};

// enum
enum Colors {
  RED = "red",
  BLUE = "blue",
  GREEN = "green",
}
let color1: Colors = Colors.BLUE;
let color2: Colors = Colors.RED;

// ############### INTERFACE TYPE ############### //

interface IPerson {
  name: string;
  age?: number;
}

// let singer: { name: string; age: number };
// let police: { name: string; age: number };
let singer: IPerson;
let police: IPerson;

// ############### GENERIC TYPE ############### //
const getString = <Type>(data: Type): Type => data;
console.log(getString<string>("hello"));

// ############### CLASS ############### //

class Car {
  // default is public.
  name: string;
  year: number;
  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }
}

let audi = new Car("Audi", 2020);
let bmw = new Car("BMW", 2020);

class CarPrivateProps {
  // default is public.
  name: string;
  private year: number;
  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }

  toString(): string {
    return `${this.name} ${this.year}`;
  }
}

console.log("SHOW TO STRING FUNCTION");

let c = new CarPrivateProps("Audi", 2020);
console.log(c.toString());

class CarPrivateAndReadOnlyProps {
  // default is public.
  readonly name: string;
  private year: number;
  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }

  toString(): string {
    return `${this.name} ${this.year}`;
  }
}

console.log("SHOW TO STRING FUNCTION");
let c1 = new CarPrivateAndReadOnlyProps("Audi", 2020);
console.log(c1.toString());
// c1.name = "BMW"; error if you try to change the name.

// short version
class CarPrivateAndReadOnlyPropsShort {
  constructor(readonly name: string, private year: number) {}

  toString(): string {
    return `${this.name} ${this.year}`;
  }
}

console.log("SHOW TO STRING FUNCTION");
let c2 = new CarPrivateAndReadOnlyPropsShort("Audi", 2020);
console.log(c1.toString());
// c1.name = "BMW"; error if you try to change the name.

// run ts code.

/*
    tsc <file_name>.ts
    node <file_name>.js
*/

