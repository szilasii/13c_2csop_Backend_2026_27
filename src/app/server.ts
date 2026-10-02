import app from "./app.ts"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Fut az express webszerver ${PORT} porton!`)
})