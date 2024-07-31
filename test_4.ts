#!/usr/bin/env ENABLE_LOGS=true node /Users/errendir/Develop/TypeScript/built/local/tsc.js --noEmit --skipLibCheck --diagnostics --generateTrace trace_out test_4.ts

interface Base {
  a: this["z"];
  z: { prop1: string };
}

interface Ext {
  a: { prop1: string; prop2: string };
  z: { prop1: string; prop2: string };
}

type BB<Z extends Base = Ext> = Z;

type RequireKL<T extends { k: any; l: any }> = T;

interface One {
  a: RequireKL<NonNullable<this["data"]>>;
  data?: { k: number; l: number };
}

interface Two {
  a: { k: number; l: number };
  data: undefined;
}

interface Three {
  a: undefined;
  data?: { k: number; l: number; z: number };
}

type ZZ<Z extends One = Two> = {};
