export const getProducto  = (req,res) => {
    res.status(200).json({
        msg: 'esto es un get'
    })
}

export const postProducto = (req,res) => {
    res.status(200).json({
        msg: 'esto es un post'
    })
}
export default {
    getProducto,
    postProducto
}