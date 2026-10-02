import express from "express"
import cors from "cors"
import routesProduct from "../controllers/product/routes.ts"
const  app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin:"*" }))
app.use(routesProduct)


export default app