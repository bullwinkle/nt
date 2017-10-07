"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
function createWsServer(io, httpServer) {
    var wsServer = io(httpServer);
    wsServer.on('connection', routes_1.initWebSocketRoutes);
    return wsServer;
}
exports.createWsServer = createWsServer;
