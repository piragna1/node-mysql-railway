import express from "express";
import { pool } from "./db.js";
const app = express();
const PORT = process.env.PORT ?? 3000;
app.get("/", (req, res) => {
  console.log("request received");
  res.end("Welcome to server");
});
app.get("/ping", async (req, res) => {
  console.log("request received");
  const [result] = await pool.query(`Select "hello world" as Result`);
  res.json(result[0]);
});
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
