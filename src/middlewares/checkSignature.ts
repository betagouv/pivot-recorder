import { NextFunction, Request, Response } from "express"
import crypto from "crypto"

import { config } from "../config"

export const checkSignature = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const signature = req.headers["x-signature"]
  const body = req.body

  if (!signature || !body) {
    return res.status(401).json({
      error: "Missing signature or body",
    })
  }

  const hash = crypto
    .createHmac("sha256", config.secretKey)
    .update(JSON.stringify(body))
    .digest("hex")

  if (hash !== signature) {
    return res.status(401).json({
      error: "Invalid signature",
    })
  }

  next()
}
