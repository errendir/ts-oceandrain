interface Lemur {
  parent: this;
  weird: this extends { a: number } ? true : false;
  // datum: { world: string }
  // datum2: this["datum"]
}

// Should the `this` type in the Lemur interface really be overwritten in the Mouse type?
type Mouse = ({ squeek: true } & (Lemur | null)) | null;

declare const m: Mouse;
m?.parent?.squeek;

// Impossible type
interface Screw {
  hasLength: this extends { length: number } ? true : false;
}

type Cleanup<T> = { [K in keyof T]: T[K] } & {};

type LongScrew = Screw & { length: number };
type CleanLongScrew = Cleanup<LongScrew>;
type IsFalse = Screw["hasLength"];
type IsTrue = LongScrew["hasLength"];

const ls1: LongScrew = { length: 11, hasLength: true };
const ls2: CleanLongScrew = { length: 11, hasLength: true };

interface Zebra {
  a: this;
  b: (c: this) => number;
}

interface Horse extends Zebra {
  d: number;
}

declare const otherHorse: Horse;
const a: Horse = { a: otherHorse, b: (c) => 11 };
const b: Zebra = a;

// type M = {
//   fn<T>(t: T): void;
// };

// interface Z extends M {
//   fn<T extends { a: number }>(t: T): void;
// }
