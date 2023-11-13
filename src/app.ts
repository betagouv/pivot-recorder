import express, { Application } from "express"
import bodyParser from "body-parser"
import { healthCheckRoutes } from "./controllers/healthCheck"
import { userRoutes } from "./controllers/users"

const app: Application = express()
const PORT = 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", healthCheckRoutes)
app.use("/users", userRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
