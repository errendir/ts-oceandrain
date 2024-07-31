#!/usr/bin/env ENABLE_LOGS=true node /Users/errendir/Develop/TypeScript/built/local/tsc.js --noEmit --skipLibCheck --diagnostics --generateTrace trace_out test_3.ts

// import * as socketio from "socket.io";

interface EventsMap {
    [event: string]: any;
}
interface DefaultEventsMap {
    [event: string]: (...args: any[]) => void;
}
type EventNames<Map extends EventsMap> = keyof Map & (string | symbol);
type ReservedOrUserEventNames<ReservedEventsMap extends EventsMap, UserEvents extends EventsMap> = EventNames<ReservedEventsMap> | EventNames<UserEvents>;
type ReservedOrUserListener<ReservedEvents extends EventsMap, UserEvents extends EventsMap, Ev> = FallbackToUntypedListener<Ev extends EventNames<ReservedEvents> ? ReservedEvents[Ev] : Ev extends EventNames<UserEvents> ? UserEvents[Ev] : never>;
type FallbackToUntypedListener<T> = [T] extends [never] ? (...args: any[]) => void | Promise<void> : T;


declare abstract class StrictEventEmitter<ListenEvents extends EventsMap = DefaultEventsMap, ReservedEvents extends EventsMap = {}> {
    on1<Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>>(ev: Ev, listener: ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>): this;
    on2<Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>>(ev: Ev, listener: ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>): this;
    on3<Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>>(ev: Ev, listener: ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>): this;
    on4<Ev extends ReservedOrUserEventNames<ReservedEvents, ListenEvents>>(ev: Ev, listener: ReservedOrUserListener<ReservedEvents, ListenEvents, Ev>): this;
}
class Socket<
    SocketData01 = any, SocketData02 = any, SocketData03 = any, SocketData04 = any, SocketData05 = any, SocketData06 = any,
    SocketData11 = any, SocketData12 = any, SocketData13 = any, SocketData14 = any, SocketData15 = any, SocketData16 = any,
    SocketData21 = any, SocketData22 = any, SocketData23 = any, SocketData24 = any, SocketData25 = any, SocketData26 = any,
    SocketData31 = any, SocketData32 = any, SocketData33 = any, SocketData34 = any, SocketData35 = any, SocketData36 = any,
    SocketData41 = any, SocketData42 = any, SocketData43 = any, SocketData44 = any, SocketData45 = any, SocketData46 = any,
    SocketData51 = any, SocketData52 = any, SocketData53 = any, SocketData54 = any, SocketData55 = any, SocketData56 = any,
    SocketData61 = any, SocketData62 = any, SocketData63 = any, SocketData64 = any, SocketData65 = any, SocketData66 = any,
> extends StrictEventEmitter {
}

type TriggerType = Socket

type BoxedSocket<T extends TriggerType = TriggerType> = { boxed: T };
