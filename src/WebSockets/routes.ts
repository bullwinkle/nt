export function initWebSocketRoutes (socket:SocketIO.Socket) {

	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});

}