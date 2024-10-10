import { Router } from "express"
import { checkAuth, decodeUserFromToken } from '../middleware/auth.js'
import * as businessCtrl from '../controllers/businesses.js'

const router = Router()
// this was what was missing vvv
router.use(decodeUserFromToken)
router.get("/", businessCtrl.index)
router.get("/:id", businessCtrl.show)
router.post("/register", checkAuth, businessCtrl.create)
router.put("/edit/:id", checkAuth, businessCtrl.edit)
router.delete("/:id", checkAuth, businessCtrl.delete)
router.put("/add-product/:id", checkAuth, businessCtrl.approveProduct)
// router.put("/request-product", checkAuth, businessCtrl.requestProduct)

// These routes will be used for approve or deny products to the businesses inventory

// this one should approve the product to the businesses inventory. adding a copy of the item to the inventory and changing its approval to true

// router.put("/:id/approve-product/", checkAuth, businessCtrl.approveProduct)

// this one should deny the item from the requested array, removing it from the array

router.put("/denyProduct/:id", checkAuth, businessCtrl.denyProduct)

// TODO: add a route and function to remove items from the array of items.


router.put("/delete-all/:id", checkAuth, businessCtrl.clearProducts)
router.put("/edit-stock/:id", checkAuth, businessCtrl.editStock)


export { router }