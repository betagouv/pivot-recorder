import express, { Application } from "express"
import bodyParser from "body-parser"
import { healthCheckRoutes } from "./controllers/healthCheck"

const app: Application = express()
const PORT = 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", healthCheckRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
