import pgService from "../services/pg.service.js"

export const getUsuario = async (username, password) => {
    const  pg = new pgService()
    console.log(username + password)
    return await pg.connection.oneOrNone(`select username from usuario
    where username = $1 and password = $2`, [username, password])
}