import User from "../models/User";
import bcrypt from 'bcrypt'
import {createToken} from '../utils/tokenUtils.js'

export const login = async(req, res) => {
    const {email, password} = req.body
    
    try {
        const user = await User.findOne({email});
        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).json({message: 'Credenciales Invalidas'})
        }

        const token = createToken({id: user._id, role: user.role})
        res.json({message: "Logeado satisfactoriamente", token})

    } catch (error) {
        res.status(500).json({message:'Error en el inicio de sesion', error})
    }
}

export const register = async(req, res) => {
    const {username, email, password, role} = req.body

    try {
        const newUser = new User({username, email, password, role})
        await newUser.save()

        //Crear token
        const token = createToken({id:newUser_id, role: newUser.role, username: newUser.username})

        res.status(201).json({message: 'Usuario resgistrado correctamente', token})
    } catch (error) {
        res.status(500).json({message: 'Error en el registro de Usuario ', error})
    }
}

// Controlador para verificar el token
export const verifyToken = (req, res) => {
    // Si llegamos aquí, el token es válido (verificado en el middleware)
    res.json({ message: 'Token is valid', user: req.user });
};