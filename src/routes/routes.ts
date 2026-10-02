import { Router } from "express"

const router : Router = Router()

router.get('/',(_req,res) => {  
    res.send("A szerver fut!")
})

export default router