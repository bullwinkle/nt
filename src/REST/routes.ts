import {Router} from "express";

export function initRestRoutes (router:Router) {

	/* FAKE USER ROUTE */
	router.get('/user',(req,res,next)=>{
		res.json({
			body: {
				id: 1,
				firsName: 'Jeremy',
				lastName: 'Clarkson',
				nickName: 'Jezza'
			}
		})
	})

}