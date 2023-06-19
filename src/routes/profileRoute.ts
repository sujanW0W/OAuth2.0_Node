import express, {Request, Response, NextFunction} from 'express'
const router = express.Router();

const authCheck = (req:Request, res: Response, next: NextFunction): void => {
    if(!req.session.user){
        res.redirect('/auth/login')
    }
    else{
        next()
    }
}

router.get('/', authCheck, (req: Request, res:Response): void => {
   const {user} = req.session
    // res.send(user)

    res.render(__dirname + '/../views/pages/profile', {
        user
    })
})

export { router}