import express, { Application } from "express"
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"

import { healthCheckRoutes } from "./controllers/healthCheck"
import { userRoutes } from "./controllers/users"

const app: Application = express()
const PORT = process.env.PORT || 4000
const isProduction = process.env.NODE_ENV === "production"
const corsOptions = {
  origin: isProduction ? "https://mes-aides.1jeune1solution.beta.gouv.fr" : "*",
}
const logger = isProduction ? morgan("tiny") : morgan("dev")

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger)

// Routes
app.use("/", healthCheckRoutes)
app.use("/users", userRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
