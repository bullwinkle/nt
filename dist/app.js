"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var index_1 = require("./REST/index");
var index_2 = require("./utils/index");
exports.app = express();
/* INDEX */
exports.app.get('/', function (req, res, next) {
    return res.sendFile(path.resolve('./static/index.html'));
});
/* REST ROUTER DEFINITION */
exports.app.use('/rest', index_1.restRouter);
/* STATIC FILES */
exports.app.use('/static', express.static(path.resolve('./static')));
exports.app.use('/node_modules', express.static(path.resolve('./node_modules')));
/* NOT FOUND HANDLER, SHOULD BE LAST */
exports.app.use('/*', function (req, res, next) {
    return res.sendFile(path.resolve('./static/404.html'));
});
/* log all initialized routes to console */
console.log(JSON.stringify(index_2.getAllExpressAppRoutes(exports.app), null, 2));
