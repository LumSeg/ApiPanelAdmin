import jwt from 'jsonwebtoken'
import { config } from '../config/config.js'


//Funcion para crear Token
export const createToken = (payload) => {
    return jwt.sign(payload, config.jwtSecret, {expiresIn: config.tokenExpiration })
}


//Funcion para verificar token
export const verifyToken = (token) => {
    return jwt.verify( token, config.jwtSecret)
}