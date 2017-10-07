/// <reference types="socket.io" />
/// <reference types="node" />
import { Server as HttpServer } from "net";
export declare function createWsServer(io: SocketIOStatic, httpServer: HttpServer): SocketIO.Server;
