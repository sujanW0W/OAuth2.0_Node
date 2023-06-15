import express,{Request, Response} from 'express'
const router = express.Router()

router.get('/login', (req:Request, res:Response): void => {
    res.send('Login')
})

router.get('/google', (req: Request, res: Response): void => {
    res.send("Google Login")
})

router.get('/logout', (req: Request, res: Response): void => {
    res.send("Logout")
})

export { router}