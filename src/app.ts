import express, { Application } from "express"
import bodyParser from "body-parser"
import cors from "cors"

import { healthCheckRoutes } from "./controllers/healthCheck"
import { userRoutes } from "./controllers/users"

const app: Application = express()
const PORT = process.env.PORT || 4000
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://mes-aides.1jeune1solution.beta.gouv.fr"
      : "*",
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", healthCheckRoutes)
app.use("/users", userRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
