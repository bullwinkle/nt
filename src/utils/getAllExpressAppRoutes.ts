import {Application} from "express";

export function getAllExpressAppRoutes (app: Application) {

	function print (result:any, path:Array<any>, layer:any) {
		if (layer.route) {
			layer.route.stack.forEach(print.bind(null, result,path.concat(split(layer.route.path))))
		} else if (layer.name === 'router' && layer.handle.stack) {
			layer.handle.stack.forEach(print.bind(null, result,path.concat(split(layer.regexp))))
		} else if (layer.method) {
			const fullPath = `/${path.concat(split(layer.regexp)).filter(Boolean).join('/')}`;
			const method = layer.method.toUpperCase();
			if (result[fullPath]) result[fullPath].push(method);
			else result[fullPath] = [method];
		}
	}

	function split (thing:any) {
		if (typeof thing === 'string') {
			return thing.split('/')
		} else if (thing.fast_slash) {
			return ''
		} else {
			const match = thing.toString()
				.replace('\\/?', '')
				.replace('(?=\\/|$)', '$')
				.match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
			return match
				? match[1].replace(/\\(.)/g, '$1').split('/')
				: '<complex:' + thing.toString() + '>'
		}
	}

	return app._router.stack.reduce((result:any,layer:any)=>{
		const path:Array<any> = [];
		print(result, path,layer);
		return result;
	},{});
}