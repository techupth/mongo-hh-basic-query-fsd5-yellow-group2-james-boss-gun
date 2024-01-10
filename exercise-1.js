import { MongoClient } from "mongodb";

const connectionString = "mongodb://127.0.0.1:27017";

export const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

await client.connect();

const db = await client.db("practice-mongo");

const collection = await db.collection("pizzaOrders");

const specificCustomer = await collection.findOne({ customer_name: "Cherlyn" });
const mastercardOrders = await collection.find({ credit_card_type: "mastercard" })
const mediumPizzas = await collection.find({ size: "medium" }).limit(5)

console.log(await mediumPizzas.toArray())

await client.close();


