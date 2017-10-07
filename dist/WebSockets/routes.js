"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initWebSocketRoutes(socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
}
exports.initWebSocketRoutes = initWebSocketRoutes;
