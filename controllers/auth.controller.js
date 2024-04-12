import { getUsuario } from "../models/auth.model.js"
import { generateToken } from "../services/token.service.js"

export const login = async (req, res) =>{
    let { username, password } = req.body

    console.log(username + password)

    try {
    let data = await getUsuario(username, password)
    if(!data){
        throw new Error("Los datos son incorrectos")
    }

    res.status(200).json({
        success:true,
        token: generateToken(data),
        msn: 'Logueado correctamente'
    })
    } catch (error) {
        res.status(401).json({
            success:false,
            token: '',
            msn: error.message
        })
    }
}