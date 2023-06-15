import 'dotenv/config'
import express,{Application} from 'express'
import path from 'path'

import { router as usersRoute} from './routes/userRoute'

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

        this.app.use('/users', usersRoute)
    }
}

export default App