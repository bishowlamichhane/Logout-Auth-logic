import express from 'express'
import { verifyJWT } from '../middleware/auth.middleware.js'
import { logoutUser } from '../controllers/userController.controller.js'


const router=express.Router()


//router routing to middleware and then the controller
router.route('/logout').post(verifyJWT,logoutUser)

export default router