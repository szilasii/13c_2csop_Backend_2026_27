import express from "express"
import type {Request, Response} from "express"
import data from "../data/data.ts"
import cors from "cors"

const  app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin:"*" }))

app.get('/',(_req:Request,res:Response) => {
    res.send("A szerver fut!")
})
app.get('/products',(req:Request,res:Response) => {
    res.json(data)
})

app.post("/product",(req:Request,res:Response) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000, () => {
    console.log("Fut az express webszerver")
})