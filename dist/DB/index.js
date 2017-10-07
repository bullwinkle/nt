"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var CONFIG_1 = require("../CONFIG");
var promiseLibrary = global.Promise;
Object.assign(mongoose, {
    Promise: promiseLibrary
});
function connectDb() {
    var result = mongoose.connect(CONFIG_1.CONFIG.DB.URL, {
        useMongoClient: true,
        promiseLibrary: promiseLibrary
    })
        .then(function () {
        console.log('[MONGO] connection success');
    })
        .catch(function (err) {
        console.warn('[MONGO] connection error', err);
        throw err;
    });
    return result;
}
exports.connectDb = connectDb;
