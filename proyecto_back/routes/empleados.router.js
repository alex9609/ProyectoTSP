const express = require('express')

const router = express.Router();
const empleadosController = require("../controllers/empleados.controller"); //Ruta del controlador

router.post("/",empleadosController.create)
router.get("/",empleadosController.find)
router.get("/:id",empleadosController.findOne)
router.put("/:id",empleadosController.update)
router.delete("/:id",empleadosController.remove)

module.exports = router; //Exportamos la ruta
