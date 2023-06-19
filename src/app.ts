import 'dotenv/config'
import express,{Application} from 'express'

import { router as usersRoute} from './routes/userRoute'
import {router as profileRoute} from './routes/profileRoute'

import './services/passport-setup' // this import is only for side effect.

// import cookieSession from 'cookie-session'
import session from 'express-session'
import passport from 'passport'

class App{
    public app: Application

    constructor(){
        this.app = express()
        this.config()

        this.app.get('/', (req: express.Request, res: express.Response) => {
            const puppies = [
                {name: "toofy", breed: 'japanese spitz', age: 9},
                {name: 'coco', breed: 'golden retriever', age: 1},
                {name: 'oreo', breed: 'german shephard', age: 1}
            ]
            
            res.render(__dirname + '/views/pages/index', {
                puppies: puppies
            })
        })
    }

    private config(): void{
        this.app.use(express.json())
        this.app.use( express.static(__dirname + '/public'))
        this.app.set('view engine', 'ejs')

        
        this.app.use(session({
            name:'cookie-session',
            secret: process.env.COOKIE_SESSION_KEY as string,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 24*60*60*1000,
                secure: false
            }
        }))
        
        //initialize passport
        this.app.use(passport.initialize())
        this.app.use(passport.session())

        //Routes
        this.app.use('/auth', usersRoute)
        this.app.use('/profile', profileRoute)
    }
}

export default App