import * as express from "express";
import * as path from "path";
import {restRouter} from "./REST/index";
import {getAllExpressAppRoutes} from "./utils/index";



export const app:express.Application = express();

/* INDEX */
app.get('/',(req,res,next) => {
	return res.sendFile(path.resolve('./static/index.html'));
});

/* REST ROUTER DEFINITION */
app.use('/rest',restRouter);

/* STATIC FILES */
app.use('/static',express.static(path.resolve('./static')));
app.use('/node_modules',express.static(path.resolve('./node_modules')));

/* NOT FOUND HANDLER, SHOULD BE LAST */
app.use('/*',(req,res,next) => {
	return res.sendFile(path.resolve('./static/404.html'));
});



/* log all initialized routes to console */
console.log(JSON.stringify(
	getAllExpressAppRoutes(app),
	null,2
));