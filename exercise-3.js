import { MongoClient } from "mongodb";

const connectionString = "mongodb://127.0.0.1:27017";

export const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

await client.connect();

const db = await client.db("practice-mongo");

const collection = await db.collection("pizzaOrders");

// - Sort ข้อมูลทั้งหมดด้วย Property `total_price`  จากมากไปน้อย
// - Sort ข้อมูลทั้งหมดด้วย Property `created_at` จากวันที่เก่าที่สุดไปใหม่ที่สุด

const ordersSortedByTotalPrice = collection.find({}).sort({ total_price: -1 });
const ordersSortedByCreation = collection.find({}).sort({ total_price: 1 });

console.log(await ordersSortedByCreation.toArray())


await client.close()



