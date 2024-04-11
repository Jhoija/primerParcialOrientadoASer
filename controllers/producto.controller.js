import { getProductoModel, postProductoModel } from "../models/producto.model.js"


export const getProducto  = async (req,res) => {
    let data = await getProductoModel()
    res.status(200).json({
        msg : 'esto es GET', data:data
    })
}

export const postProducto = async (req,res) => {
    let { detalle, nombre, valor} = req.body
    let data = await postProductoModel(nombre, detalle, valor)
    res.status(200).json({
        msg: 'esto es un post', data:data
    })
}
export default {
    getProducto,
    postProducto
}