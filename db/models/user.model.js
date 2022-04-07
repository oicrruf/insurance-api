const {Model,DataTypes,Sequelize} = require('sequelize');

const USER_TABLE = 'users';
const MODEL_NAME = 'User';

const UserSchema = {
    id:{
        allowNulls:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.BIGINT
    },
    email:{
        allowNulls:false,
        type:DataTypes.STRING,
        unique:true
    },
    password:{
        allowNulls:false,
        type:DataTypes.STRING,        
    },
    createdAt:{
        allowNulls:false,
        type:DataTypes.DATE,
        field:'created_at',
        defaultValue:Sequelize.NOW      
    },
}

class User extends Model{
    static associate(){}
    static config(sequelize){
        return {
            sequelize,
            tableName:USER_TABLE,
            modelName:MODEL_NAME,
            timestamps:false,
        }
    }
}

module.exports = {USER_TABLE,MODEL_NAME,UserSchema,User}