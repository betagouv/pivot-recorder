const isProduction = process.env.NODE_ENV === "production"

export const config = {
  env: process.env.NODE_ENV || "development",
  corsOptions: {
    origin: isProduction
      ? "https://mes-aides.1jeune1solution.beta.gouv.fr"
      : "*",
  },
  port: process.env.PORT || 4000,
  secretKey: process.env.SECRET_KEY || "secret",
  morganFormat: isProduction ? "tiny" : "dev",
}
