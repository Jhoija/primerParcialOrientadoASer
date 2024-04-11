import { getProductoModel, postProductoModel, putProductoModel, deleteProductoModel } from "../models/producto.model.js"


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

export const putProducto = async (req,res) => {
    let { detalle, nombre, valor} = req.body
    let { id } = req.params
    let data = await putProductoModel(detalle, nombre, valor,id)
    res.status(200).json({
        msg: 'esto es un put', data:data
    })
}

export const deleteProducto = async (req,res) => {
    let { id } = req.params
    console.log(id)
    let data = await deleteProductoModel(id)
    res.status(200).json({
        msg: 'esto es un delete', data:data
    })
}

export default {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}