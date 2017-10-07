import * as express from "express";
import {initRestRoutes} from "./routes";

export const restRouter: express.Router = express.Router();


/* INDEX ROUTES */
/* handling exactly '/', so do not use 'use' method here */
restRouter.get('/',handleRoot);
restRouter.post('/',handleRoot);
restRouter.put('/',handleRoot);
restRouter.patch('/',handleRoot);
restRouter.delete('/',handleRoot);

/* REST ROUTES */
initRestRoutes(restRouter);

/* NOT FOUND HANDLER, SHOULD BE LAST */
restRouter.use('*',handleNotFound);



function handleRoot (req:express.Request,res:express.Response,next:express.NextFunction) {
	res.status(200);
	return res.json({
		status: 200,
		body: {
			hello: "world"
		}
	});
}

function handleNotFound(req:express.Request,res:express.Response,next:express.NextFunction) {
	res.status(404);
	return res.json({
		status: 404,
		message: 'Not found'
	});
}
