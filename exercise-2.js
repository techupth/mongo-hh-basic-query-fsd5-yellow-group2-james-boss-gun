import { MongoClient } from "mongodb";

const connectionString = "mongodb://127.0.0.1:27017";

export const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

await client.connect();

const db = await client.db("practice-mongo");

const collection = await db.collection("pizzaOrders");

// - ใช้ `findOne` ในการหาข้อมูล Document ของลูกค้าชื่อ `Zoe`
// จากนั้นให้ทำการ Transform ข้อมูลให้เหลือแค่ Property `total_price` และ `customer_name`

const zoesOrder = await collection.findOne({ customer_name: "Zoe" }, { total_price: 1, customer_name: 1 })

console.log(zoesOrder)

await client.close();


