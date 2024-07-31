#!/usr/bin/env npx tsc --noEmit --skipLibCheck --diagnostics test_1.ts
// #!/usr/bin/env node /Users/errendir/Develop/TypeScript/built/local/tsc.js --noEmit --skipLibCheck --diagnostics test_1.ts
// #!/usr/bin/env node --inspect-brk ./node_modules/.bin/tsc --noEmit --skipLibCheck --diagnostics test_1.ts

import * as socketio from "socket.io";
import type { DefaultEventsMap } from "socket.io/dist/typed-events.d";

// declare const K: socketio.Server<{ a: "a"; b: "b" }>;
// const Z1: socketio.Server<{ a: 1 }> = K;
// const Z2: socketio.Server<{ a: 2 }> = K;
// const Z3: socketio.Server<{ a: 3 }> = K;
// const Z4: socketio.Server<{ a: 4 }> = K;
// const Z5: socketio.Server<{ a: 5 }> = K;

// Slow 1 (this works even when inlined, so the re-thising issue is not a problem)
// type TriggerType = socketio.Socket;

// // Slow 2
type TriggerType = socketio.Server;

// Slow 3
// interface TriggerType<M = {}> {
//   prop: socketio.Server<DefaultEventsMap & M>;
// }

// DOESN'T WORK: Slow 4
// type Letter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i";
// type TriggerType<T = number> = {
//   [K in `${Letter}${Letter}${Letter}`]: TriggerType<[T, T]>;
// };

// Fix 1
// type TriggerType = { a: socketio.Socket };

// type TriggerType<T = string> = { name: T };

// let generateSockets: TriggerType[] = [];
// declare const blip: TriggerType;
// generateSockets = generateSockets.filter((s) => s !== blip);

// // This code for some reason doesn't trigger the problem
// declare const MM: TriggerType;
// const ZZ: socketio.Socket = MM;

// // Replication 1:
// declare class Wrapper<T> {
//   genericFn<S extends T>(): Wrapper<S>;
// }
// declare let generateSockets2: Wrapper<TriggerType>;
// generateSockets2 = generateSockets2.genericFn();

declare function genericFn<S extends TriggerType>(): S;
genericFn() satisfies TriggerType;

// // Another way:
// declare function genericFn<S extends TriggerType>(k: S): S;
// genericFn(0 as any as TriggerType);
