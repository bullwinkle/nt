"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initRestRoutes(router) {
    /* FAKE USER ROUTE */
    router.get('/user', function (req, res, next) {
        res.json({
            body: {
                id: 1,
                firsName: 'Jeremy',
                lastName: 'Clarkson',
                nickName: 'Jezza'
            }
        });
    });
}
exports.initRestRoutes = initRestRoutes;
