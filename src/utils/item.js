// replace uuid with nanoid
// import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";
import * as faker from "faker";
export function generateFakeData() {
  return {
    id: nanoid(), //uuidv4(),
    quantity: Math.random(),
    name: faker.lorem.word(),
    description: faker.lorem.words(),
    createdAt: new Date(),
  };
}
