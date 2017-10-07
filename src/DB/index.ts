import * as mongoose from 'mongoose';
import {CONFIG} from "../CONFIG";

const promiseLibrary = global.Promise;

Object.assign(mongoose,{
	Promise: promiseLibrary
});

export function connectDb () {
	const result = mongoose.connect(CONFIG.DB.URL, {
		useMongoClient: true,
		promiseLibrary
	})
		.then(()=>{
			console.log('[MONGO] connection success')
		})
		.catch((err:any)=>{
			console.warn('[MONGO] connection error',err)
			throw err;
		});

	return result;
}





