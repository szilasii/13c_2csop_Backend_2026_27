import express from "express"
import type {Request, Response} from "express"


const  app = express();
app.use(express.text())

app.get('/',(_req:Request,res:Response) => {
    res.send("A szerver fut!")
})

app.post("/",(req:Request,res:Response) => {
    console.log(req.body)
    res.send("dsafasf")
})

app.listen(3000, () => {
    console.log("Fut az express webszerver")
})