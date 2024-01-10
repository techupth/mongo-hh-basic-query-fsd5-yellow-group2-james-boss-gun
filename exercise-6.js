import { MongoClient } from "mongodb";

const connectionString = "mongodb://127.0.0.1:27017";

export const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

await client.connect();
const db = await client.db("practice-mongo");
const collection = await db.collection("pizzaOrders");

// -------------------

// revoke Jack's admin status

await collection.updateMany({ customer_name: "Jack" }, { $set: { "isAdmin": false } });

// add Thailand to all entries

await collection.updateMany({}, { $set: { "country": "Thailand" } })

// Find M and update.

const customer = await collection.findOne({ customer_name: "M" });

if (customer) {
  await collection.updateOne({ customer_name: customer.customer_name }, { $set: { "country": "Thailand" } });
  console.log(`Order for ${customer.customer_name} has been updated.`);
} else {
  await collection.insertOne({
    "size": "large",
    "total_price": 200000,
    "quantity": 20,
    "customer_name": "M",
    "credit_card_type": "mastercard",
    "created_at": "2022-01-01T10:48:40Z"
  });
  console.log(`New document createdf for customer M.`);
}

// -------------------


await client.close()



