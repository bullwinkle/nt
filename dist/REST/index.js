"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
exports.restRouter = express.Router();
/* INDEX ROUTES */
/* handling exactly '/', so do not use 'use' method here */
exports.restRouter.get('/', handleRoot);
exports.restRouter.post('/', handleRoot);
exports.restRouter.put('/', handleRoot);
exports.restRouter.patch('/', handleRoot);
exports.restRouter.delete('/', handleRoot);
/* REST ROUTES */
routes_1.initRestRoutes(exports.restRouter);
/* NOT FOUND HANDLER, SHOULD BE LAST */
exports.restRouter.use('*', handleNotFound);
function handleRoot(req, res, next) {
    res.status(200);
    return res.json({
        status: 200,
        body: {
            hello: "world"
        }
    });
}
function handleNotFound(req, res, next) {
    res.status(404);
    return res.json({
        status: 404,
        message: 'Not found'
    });
}
