import express from "express"
import initRoutes from "./src/routes/routes.js"
import cors from 'cors'

const app = express()
const port = 8080

app.use(cors({
    origin: '*'
}))

initRoutes(app)
app.get("/", (req, res) => {
    res.send("The API is working!")
})

app.listen(port, () => {
        console.log(`Server Running at http://localhost:${port}`)
})
