import App from './app'

const app = new App;

const PORT = process.env.PORT || 5000

const start = (): void => {
    app.app.listen(PORT, () => {
        console.log(`Server is listening on Port ${PORT}`)
    })
}

start()