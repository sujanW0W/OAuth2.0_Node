import App from './app'
import { connectDB } from './DB/connectDB';

const app = new App;

const PORT = process.env.PORT || 5000

const start =async (): Promise<void> => {
    await connectDB()
    
    app.app.listen(PORT, () => {
        console.log(`Server is listening on Port ${PORT}`)
    })
}

start()