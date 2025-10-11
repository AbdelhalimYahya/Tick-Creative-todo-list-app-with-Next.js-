import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient()

async function main() {
  // Create users one by one since MongoDB doesn't support createMany with nested creates
  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.firstName(),
        address: {
          street: faker.location.streetAddress(),
          state: faker.location.state(),
          city: faker.location.city(),
          zip: faker.location.zipCode()
        }
      }
    });
  }
}

// "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
// "tsx prisma/seed.ts"

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })