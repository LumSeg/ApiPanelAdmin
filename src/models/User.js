import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

//Esquema de Objeto Usuario
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase:true

    },
    password:{
        type:String,
        required: true,
        minlenght: 6
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
},{
    timestamps: true //Para agregar propiedades createdAt y updatedAt Automaticamente
})

//Metodo para encriptar la contraseña antes de guardarla
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        next(error)
    }
})

//Metodo para comparar contraseñas para la autenticaion
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

//Exportar modelo
const User = mongoose.model('User', userSchema)

export default User