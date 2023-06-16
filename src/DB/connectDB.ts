import {Sequelize} from 'sequelize'

const sequelize = new Sequelize(
    'OAuth2_app',
    String(process.env.DB_USERNAME),
    String(process.env.DB_PASSWORD),
    {
        host: String(process.env.DB_HOST),
        dialect: 'mysql'
    }
)

const connectDB = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log("DB connected successsfully.")
    } catch (error) {
        console.log("Error in connecting to database...")
    }
}

export {sequelize, connectDB}