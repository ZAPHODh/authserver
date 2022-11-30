import express from 'express'
import userController from '../controllers/userController'

const router = express.Router()
const { registerOne, loginOne } = userController

router.post('/register', registerOne)
router.post('/login', loginOne)

export default router
