import { decode } from "jsonwebtoken";
import { verifyToken } from "../utils/tokenUtils";

export const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({ message: 'No se encontro token de autorizacion'})
    }

    const token = authHeader.split(' ')[1] //Formato Bearer TOKEN

    try {
        const decoded = verifyToken(token)
        req.user = decoded //Añadimos el usuario decodificada a la solicitud http

        //LLamada a la siguiente funcion que pasamos por parametro
        next()
    } catch (e) {
        res.status(401).json({ message: 'Token invalido!'})
    }
}