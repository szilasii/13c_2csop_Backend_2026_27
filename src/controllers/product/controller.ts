import type {Request, Response} from "express"
import data from "../../data/data.ts"
import { Product, ProductManager } from "./product.ts"

export const getProducts = (req: Request, res: Response) => {
    const products = new ProductManager(data)
    res.json(products.allProductsData)
} 

export const createProduct = (req: Request, res: Response) => {
    const newProduct = new Product(req.body)
    const products = new ProductManager(data)
    products.addProduct(newProduct)
    
    res.json({message: "Product created", product: newProduct.toJSON()})
}
export const updateProduct = (req: Request, res: Response) => {
    const {id} = req.params
    console.log(`Updating product with id: ${id}`)
    res.json({message: `Product with id ${id} updated`})
}
export const deleteProduct = (req: Request, res: Response) => {
    const {id} = req.params
    console.log(`Deleting product with id: ${id}`)
    res.json({message: `Product with id ${id} deleted`})
}
export const getProductById = (req: Request, res: Response) => {
    const {id} = req.params
    console.log(`Fetching product with id: ${id}`)
    res.json({message: `Product with id ${id} fetched`})
}
export const patchProduct = (req: Request, res: Response) => {
    const {id} = req.params
    console.log(`Patching product with id: ${id}`)
    res.json({message: `Product with id ${id} patched`})
}
