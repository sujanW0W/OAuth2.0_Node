import express,{Request, Response} from 'express'
const router = express.Router()

import passport from 'passport'

router.get('/login', (req:Request, res:Response): void => {
    res.render(__dirname + '/../views/pages/login')
})

router.get('/google', passport.authenticate('google', {scope: ['profile']}))

//callback route for google to redirect to
router.get('/google/redirect', 
    passport.authenticate('google', {
        session: false
    }),
    (req:Request, res: Response) => {
        // console.log(req.user)

        req.session.user = req.user
        res.redirect('/profile')
    }
)

router.get('/logout', (req: Request, res: Response): void => {
    req.logout(function(err){
        if(err){
            console.log(err)
            return;
        }
        res.redirect('/')
    })
})

export { router}