import { Router } from 'express'
import { dropUsersDB } from '../controllers/test.controllers'
const testRouter = Router()

testRouter.delete('/drop-db', dropUsersDB)

export default testRouter
