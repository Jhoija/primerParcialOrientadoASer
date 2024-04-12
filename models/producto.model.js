import pgService from "../services/pg.service.js"

export const getProductoModel = async()=>{
    const pg = new pgService()
    return await pg.connection.query(
        `SELECT * FROM PRODUCTO`
    )
}

export const getProductoUnicoModel = async(id)=>{
    const pg = new pgService()
    console.log(id)
    return await pg.connection.oneOrNone(
        `SELECT * FROM PRODUCTO WHERE id_producto = $1`,
        [id]
    )
}

export const getProductoUnicosModel = async(nombre, detalle, valor)=>{
    const pg = new pgService()
    return await pg.connection.oneOrNone(
        `SELECT count(id_producto) FROM PRODUCTO WHERE nombre = $1 AND detalle = $2 AND valor = $3`,
        [nombre, detalle, valor]
    )
}

export const postProductoModel = async(nombre, detalle, valor)=>{
    const pg = new pgService()
    return await pg.connection.one(
        `INSERT INTO PRODUCTO (NOMBRE, DETALLE, VALOR)
        VALUES
        ($1, $2, $3) RETURNING *`,
        [nombre, detalle, valor]
    )
}

export const putProductoModel = async(nombre, detalle, valor, id)=>{
    const pg = new pgService()
    return await pg.connection.query(
        `UPDATE producto
        SET nombre = $1,
        detalle = $2,
        valor = $3
        WHERE id_producto = $4
        RETURNING *
        `,
        [nombre, detalle, valor, id]
    )
}

export const deleteProductoModel = async(id)=>{
    const pg = new pgService()
    await pg.connection.query(`DELETE FROM producto WHERE id_producto = $1`, [id])
    return { success: true, message: 'Producto eliminado exitosamente' }
}