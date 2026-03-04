import {
  MYSQLHOST,
  MYSQLUSER,
  MYSQLPASSWORD,
  MYSQLNAME,
  MYSQLPORT,
} from "./config.js";

import { createPool } from "mysql2/promise";
export const pool = createPool({
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  host: MYSQLHOST,
  port: MYSQLPORT,
  database: MYSQLNAME,
});
