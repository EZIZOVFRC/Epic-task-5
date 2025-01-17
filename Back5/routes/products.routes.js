
const express = require("express")
const { productsController } = require("../controllers/products.controller")
const router = express.Router()

router.get("/", productsController.getAll)
router.get("/:id", productsController.getById)
router.post("/", productsController.add)
router.delete("/:id", productsController.delete)
router.put("/:id", productsController.edit)

module.exports = router 
