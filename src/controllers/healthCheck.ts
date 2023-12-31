import { Router, Request, Response } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => {
  res.status(200).send({ status: "ok" })
})

export { router as healthCheckRoutes }
