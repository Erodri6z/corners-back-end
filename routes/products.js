import { Router } from "express"
import { decodeUserFromToken, checkAuth, checkAdminOrStoreOwner, checkAdmin  } from "../middleware/auth.js"
import * as productsCtrl from "../controllers/product.js"

const router = Router()

router.use(decodeUserFromToken)
  // no auth yet until we figure out what twe will do with products and admins'


router.get("/", productsCtrl.index)
router.get("/:id", productsCtrl.show)
router.post("/add-product", checkAuth, productsCtrl.create)
router.delete("/delete/:id", checkAdminOrStoreOwner,  productsCtrl.delete)


export { router }