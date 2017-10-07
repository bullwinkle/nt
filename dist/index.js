#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var io = require("socket.io");
var app_1 = require("./app");
var index_1 = require("./DB/index");
var index_2 = require("./WebSockets/index");
var CONFIG_1 = require("./CONFIG");
index_1.connectDb()
    .then(onDbConnected)
    .catch(onDbConnectionError);
function onDbConnected() {
    //create http httpServer
    var httpServer = http.createServer(app_1.app);
    //create web socket httpServer
    var wsServer = index_2.createWsServer(io, httpServer);
    //get port from environment and store in Express.
    var port = process.env.PORT || CONFIG_1.CONFIG.PORT;
    app_1.app.set("port", port);
    //listen on provided ports
    httpServer.listen(port);
    //add error handler
    httpServer.on("error", function onError(error) {
        if (error.syscall !== "listen") {
            throw error;
        }
        var bind = typeof port === "string"
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
        var addr = httpServer.address();
        var bind = typeof addr === "string"
            ? "pipe " + addr
            : "port " + addr.port;
        log("Listening on " + bind);
    });
}
function onDbConnectionError(err) {
    console.warn('START SERVER ERROR', err);
    throw err;
}
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log.apply(console, ['[SERVER]:'].concat(args));
}
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.warn.apply(console, ['[SERVER] error:'].concat(args));
}
