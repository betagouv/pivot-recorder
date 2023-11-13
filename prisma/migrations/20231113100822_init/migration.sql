-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "family_name" TEXT NOT NULL,
    "given_names" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthplace_insee_code" TEXT NOT NULL,
    "birthcountry_insee_code" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
