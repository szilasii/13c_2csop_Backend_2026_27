import type { IProduct } from "./interfaces.ts"
 
export default  async function getProducts(): Promise<IProduct[]> {
    const response = await fetch("http://localhost:3000/products")
    if (!response.ok) {
        throw new Error("Http error")
    }
    const products :IProduct[] = await response.json()
    return products
}
