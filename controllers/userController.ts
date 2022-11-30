import { Request, Response } from 'express'
import { getErrorMessage } from '../utils/getErrorMessage'
import { register, login } from '../service/userServices'
import { validateSchema } from '../service/validateService'

const userController = {
    registerOne: async (req: Request, res: Response) => {
        try {
            await validateSchema(req.body)
        } catch (error) {
            return res.status(400).send(getErrorMessage(error))
        }
        try {
            await register(req.body)
            res.status(200).send('Registrado com sucesso')
        } catch (error) {
            return res.status(400).send(getErrorMessage(error))
        }
    },
    loginOne: async (req: Request, res: Response) => {
        try {
            const foundUser = await login(req.body)
            //console.log('found user', foundUser.token);
            res.status(200).send(foundUser)
        } catch (error) {
            return res.status(400).send(getErrorMessage(error))
        }
    },
}

export default userController
