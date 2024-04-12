import { getProductoModel, postProductoModel, putProductoModel, deleteProductoModel, getProductoUnicoModel, getProductoUnicosModel } from "../models/producto.model.js"


export const getProducto  = async (req,res) => {
    try{
        let data = await getProductoModel()
        if(data == null){
            return res.status(200).json({
                success: true,
                data: [],
                msg :'Tabla productos vacia'
            })
        }
        res.status(200).json({
            msg : 'informacion en la tabla', data:data
        })
    }
    catch(e){
        res.status(500).json({
            data: [],
            msg: 'Servicio no disponible, Por favor intente mas tarde',
            success: false
        });
    }
}

export const postProducto = async (req,res) => {
   
        let { nombre, detalle, valor} = req.body
        const producto = await getProductoUnicosModel(nombre, detalle, valor);  
        if(producto < 0){
            return res.status(200).json({
                success: true,
                data: [],
                msg :'Datos ya existentes por favor ingrese nuevos datos diferentes'
            })
        }
        let data = await postProductoModel(nombre, detalle, valor)
        res.status(200).json({
            msg: 'Datos almacenados correctamente', 
            data:data
        })
    
}

export const putProducto = async (req,res) => {
    try{
        let { detalle, nombre, valor} = req.body
        let { id } = req.params
        const producto = await getProductoUnicoModel(id);  
        if(!producto){
            return res.status(200).json({
                success: true,
                data: [],
                msg :'El dato no existe, no puede ser actualizado'
            })
        }
        let data = await putProductoModel(detalle, nombre, valor,id)
        res.json({
            success: true, 
            data: [],
            msg : data
        })
    }catch(e){ 
        res.status(500).json({
            data: [],
            msg: 'Servicio no disponible, Por favor intente mas tarde',
            success: false
        });
    }
}

export const deleteProducto = async (req,res) => {
    try{
        const { id } = req.params;
        const producto = await getProductoUnicoModel(id);  
        if(!producto){
            return res.status(200).json({
                success: true,
                data: [],
                msg :'El dato no existe, no puede ser eliminado'
            })
        }
        const data = await   deleteProductoModel(id); 
        res.json({success: true, data: [] ,   msg : data})
    }catch(e){ 
        res.status(500).json({data: [],msg: 'Servicio no disponible, Por favor intente mas tarde',success: false});
    }
}

export default {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}