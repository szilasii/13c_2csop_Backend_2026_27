import {Router} from "express"
import { createProduct, deleteProduct, getProductById, getProducts, patchProduct, updateProduct } from "./controller.ts"

const router : Router = Router()

router.get('/products', getProducts)
router.post('/product', createProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)
router.get('/product/:id', getProductById)
router.patch('/product/:id', patchProduct)

export default router
