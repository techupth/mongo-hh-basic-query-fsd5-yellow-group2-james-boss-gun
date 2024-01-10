import { MongoClient } from "mongodb";

const connectionString = "mongodb://127.0.0.1:27017";

export const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

await client.connect();
const db = await client.db("practice-mongo");
const collection = await db.collection("pizzaOrders");

// -------------------

await collection.deleteMany({ "customer_name": "Jack" })

// -------------------


await client.close()



