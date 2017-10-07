"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllExpressAppRoutes(app) {
    function print(result, path, layer) {
        if (layer.route) {
            layer.route.stack.forEach(print.bind(null, result, path.concat(split(layer.route.path))));
        }
        else if (layer.name === 'router' && layer.handle.stack) {
            layer.handle.stack.forEach(print.bind(null, result, path.concat(split(layer.regexp))));
        }
        else if (layer.method) {
            var fullPath = "/" + path.concat(split(layer.regexp)).filter(Boolean).join('/');
            var method = layer.method.toUpperCase();
            if (result[fullPath])
                result[fullPath].push(method);
            else
                result[fullPath] = [method];
        }
    }
    function split(thing) {
        if (typeof thing === 'string') {
            return thing.split('/');
        }
        else if (thing.fast_slash) {
            return '';
        }
        else {
            var match = thing.toString()
                .replace('\\/?', '')
                .replace('(?=\\/|$)', '$')
                .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
            return match
                ? match[1].replace(/\\(.)/g, '$1').split('/')
                : '<complex:' + thing.toString() + '>';
        }
    }
    return app._router.stack.reduce(function (result, layer) {
        var path = [];
        print(result, path, layer);
        return result;
    }, {});
}
exports.getAllExpressAppRoutes = getAllExpressAppRoutes;
