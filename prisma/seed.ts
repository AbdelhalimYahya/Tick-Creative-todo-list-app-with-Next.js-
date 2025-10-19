import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient()

async function main() {
  // one by one since MongoDB doesn't support createMany with nested creates
  
  // Create todos
  for (let i = 0; i < 10; i++) {
    await prisma.todo.create({
      data: {
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraph(),
        // completed: faker.datatype.boolean(), // You shouldn't seed the boolean property you must leave it false
        createdAt: faker.date.past(),
        authorId: "1"
      }
    });
  }
  
  // Create users
  // for (let i = 0; i < 10; i++) {
  //   await prisma.user.create({
  //     data: {
  //       email: faker.internet.email(),
  //       name: faker.person.firstName(),
  //       address: {
  //         street: faker.location.streetAddress(),
  //         state: faker.location.state(),
  //         city: faker.location.city(),
  //         zip: faker.location.zipCode()
  //       }
  //     }
  //   });
  // }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })