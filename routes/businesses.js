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
router.put("/approve-product/:id", checkAuth, businessCtrl.approveProduct)

// this one should approve the product to the businesses inventory. adding a copy of the item to the inventory and changing its approval to true

router.put("/deny-product/:id", checkAuth, businessCtrl.denyProduct)
router.put("/drop-product/:id", checkAuth, businessCtrl.stopCarryingItem)

router.put("/delete-all/:id", checkAuth, businessCtrl.clearProducts)
router.put("/edit-stock/:id", checkAuth, businessCtrl.editStock)


export { router }