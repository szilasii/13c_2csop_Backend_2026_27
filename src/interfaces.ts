export interface IProduct {
    id: number,
    name: string,
    category: string,
    brand: string,
    price: number,
    currency: "HUF" | "EUR"
    stock: number,
    rating: number,
    active: boolean,
    description: string,
    image: string
}