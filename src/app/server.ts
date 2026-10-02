import app from "./app.ts"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3000


app.get('/products',(req:Request,res:Response) => {
    res.json(data)
})

app.post("/product",(req:Request,res:Response) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(PORT, () => {
    console.log("Fut az express webszerver")
})