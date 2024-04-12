import express from "express"
import { env } from "./default.js"
import route from "../routes/index.routes.js"
import middleware from "../middlewares/index.middlewares.js";
import pgService from "../services/pg.service.js"
export default class Server{
    
    constructor(){
        this.app  = express()
        this.port = env.port
    }

    connectionDB(){
        new pgService()
    }
    middlewares(){
        this.app.use(express.json())
        this.app.use(middleware)
    }

    routes(){
        this.app.use(route)
    }

    runServer(){
        this.app.listen(this.port, () => {
            console.log(`estoy con el puerto ${this.port}`)
        })
    }

    load(){
        this.connectionDB()
        this.middlewares()
        this.routes()
        this.runServer()
    }
}