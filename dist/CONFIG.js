"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = {
    PORT: 8080,
    DB: {
        HOST: 'localhost',
        PORT: 27017,
        NAME: 'test',
        get URL() { return "mongodb://" + this.HOST + ":" + this.PORT + "/" + this.NAME; }
    }
};
