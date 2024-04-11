import { Router } from "express"
import ProductoController from "../controllers/producto.controller.js"

const routeProducto = Router()

routeProducto.get("/", ProductoController.getProducto)
routeProducto.post("/", ProductoController.postProducto)

export default routeProducto