import { Router } from "express"
import ProductoController from "../controllers/producto.controller.js"

const routeProducto = Router()
routeProducto.get("/", ProductoController.getProducto)
routeProducto.post("/", ProductoController.postProducto)
routeProducto.delete("/:id", ProductoController.deleteProducto)
routeProducto.put("/:id", ProductoController.putProducto)

export default routeProducto