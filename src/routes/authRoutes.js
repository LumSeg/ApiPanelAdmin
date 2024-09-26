import express from "express";
import { login, register, verifyToken} from "../controllers/authController";
import { authMiddleware } from "../middleware/authMiddleware";
import { route } from "express/lib/application";

const router = express.Router();

router.post('/login', login )

router.post('/register', register)

//Ruta protegida para verificar el token
router.get('/verify', authMiddleware, verifyToken)

export default router