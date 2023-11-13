import { Router, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

import { generateToken } from "../utils/generateToken"

const prisma = new PrismaClient()
const router = Router()

router.post("/", async (req: Request, res: Response) => {
  try {
    const {
      family_name,
      given_names,
      birthdate,
      gender,
      birthplace_insee_code,
      birthcountry_insee_code,
      email,
      phone,
    } = req.body

    const token = generateToken()

    const newUser = await prisma.user.create({
      data: {
        family_name,
        given_names,
        birthdate,
        gender,
        birthplace_insee_code,
        birthcountry_insee_code,
        email,
        phone,
        token,
      },
    })

    res.status(201).json({
      id: newUser.id,
      token: newUser.token,
    })
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    })
  }
})

export { router as userRoutes }
