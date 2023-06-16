import express,{Request, Response} from 'express'
const router = express.Router()

import passport from 'passport'


router.get('/login', (req:Request, res:Response): void => {
    res.render(__dirname + '/../views/pages/login')
})

router.get('/google', passport.authenticate('google', {scope: ['profile']}))

//callback route for google to redirect to
router.get('/google/redirect', 
    passport.authenticate('google'),
    (req:Request, res: Response) => {
        res.send("You reached the callback route.")
})

router.get('/logout', (req: Request, res: Response): void => {
    res.send("Logout")
})

export { router}