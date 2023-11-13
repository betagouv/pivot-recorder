import express, { Application } from "express"
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"

import { config } from "./config"
import { healthCheckRoutes } from "./controllers/healthCheck"
import { userRoutes } from "./controllers/users"

const app: Application = express()

app.use(cors(config.corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan(config.morganFormat))

// Routes
app.use("/", healthCheckRoutes)
app.use("/users", userRoutes)

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
