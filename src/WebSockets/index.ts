import {Server as HttpServer} from "net";
import {initWebSocketRoutes} from "./routes";

export function createWsServer (io:SocketIOStatic, httpServer: HttpServer) {

	const wsServer = io(httpServer);

	wsServer.on('connection', initWebSocketRoutes);

	return wsServer;
}