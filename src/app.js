import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";
const app = express();
app.get("/", async (req, res) => {
  console.log("request received");
  const [rows] = await pool.query("Select * from users;");
  res.json(rows);
  res.end("Welcome to server");
});
app.get("/ping", async (req, res) => {
  console.log("request received");
  const [result] = await pool.query(`Select "hello world" as Result`);
  res.json(result[0]);
});
app.get("/create", async (req, res) => {
  const result = await pool.query('insert into users(name) values ("John")');
  res.json(result);
});
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
