import { sequelize } from "../DB/connectDB";
import {DataTypes} from 'sequelize'

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
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