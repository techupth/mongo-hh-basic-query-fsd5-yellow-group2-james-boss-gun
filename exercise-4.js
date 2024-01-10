// - ให้ Query ข้อมูล Document ทั้งหมดที่มีการสั่งจำนวน Pizza น้อยกว่า 5 ถาด และจ่ายเงินด้วย Credit Card ของ `mastercard`
// - Query ข้อมูล Document ทั้งหมดที่สั่งซื้อ Pizza ขนาดเล็ก และมีจำนวนถาดอยู่ระหว่าง 1 - 5 ถาด
// - Query ข้อมูล Document ทั้งหมดที่มีการสั่ง Pizza จำนวนมากกว่า 10 ถาด และไม่ได้จ่ายเงินด้วย Credit Card


import { MongoClient } from "mongodb";

const connectionString = "mongodb://127.0.0.1:27017";

export const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

await client.connect();
const db = await client.db("practice-mongo");
const collection = await db.collection("pizzaOrders");

// -------------------

const mastercardOrders = await collection.find({ pizzas: { $lt: 5 }, payment_method: "mastercard" }).toArray();
const smallPizzas = await collection.find({ size: "small", pizzas: { $gte: 1, $lte: 5 } }).toArray();
const largeOrders = await collection.find({ pizzas: { $gt: 10 }, payment_method: { $ne: "credit card" } }).toArray();

// -------------------


await client.close()



