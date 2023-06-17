import { sequelize } from "../DB/connectDB";
import {DataTypes} from 'sequelize'

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    googleId: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    picture: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'Users',
    timestamps: true
})

sequelize.sync().then( () => console.log('Users table sync successfully.'))

export default User