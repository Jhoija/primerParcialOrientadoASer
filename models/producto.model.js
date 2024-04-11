import pgService from "../services/pg.service.js"

export const getProductoModel = async()=>{
    const pg = new pgService()
    return await pg.connection.query(
        `SELECT * FROM PRODUCTO`
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