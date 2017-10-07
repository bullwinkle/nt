#!/usr/bin/env node

//module dependencies.
import * as http from "http";
import * as io from 'socket.io';

import {app} from "./app";
import {connectDb} from "./DB/index";
import {createWsServer} from "./WebSockets/index";
import {CONFIG} from "./CONFIG";

connectDb()
	.then(onDbConnected)
	.catch(onDbConnectionError);


function onDbConnected () {

	//create http httpServer
	const httpServer = http.createServer(app);

	//create web socket httpServer
	const wsServer = createWsServer(io,httpServer);


	//get port from environment and store in Express.
	const port = process.env.PORT || CONFIG.PORT;
	app.set("port", port);


	//listen on provided ports
	httpServer.listen(port);

	//add error handler
	httpServer.on("error", function onError(error:any) {
		if (error.syscall !== "listen") {
			throw error;
		}

		const bind = typeof port === "string"
			? "Pipe " + port
			: "Port " + port;

		// handle specific listen errors with friendly messages
		switch (error.code) {
			case "EACCES":
				warn(bind + " requires elevated privileges");
				process.exit(1);
				break;
			case "EADDRINUSE":
				warn(bind + " is already in use");
				process.exit(1);
				break;
			default:
				throw error;
		}
	});

	//start listening on port
	httpServer.on("listening", function onListening() {
		const addr = httpServer.address();
		const bind = typeof addr === "string"
			? "pipe " + addr
			: "port " + addr.port;
		log("Listening on " + bind);
	});
}

function onDbConnectionError (err:any) {
	console.warn('START SERVER ERROR',err)
	throw err;
}


function log(...args:Array<any>) {
	return console.log('[SERVER]:', ...args);
}
function warn(...args:Array<any>) {
	return console.warn('[SERVER] error:', ...args);
}
