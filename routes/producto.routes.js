import { Router } from "express"
import ProductoController from "../controllers/producto.controller.js"
import { validate } from "../middlewares/validator.middleware.js"
import { postProductoValidator } from "../validators/producto.validator.js"

const routeProducto = Router()
routeProducto.get("/", ProductoController.getProducto)
routeProducto.post("/", ProductoController.postProducto)
routeProducto.delete("/:id", ProductoController.deleteProducto)
routeProducto.put("/:id", ProductoController.putProducto)
routeProducto.post("/", validate(postProductoValidator), ProductoController.postProducto)

export default routeProducto