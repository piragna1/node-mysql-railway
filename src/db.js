import {
  MYSQLHOST,
  MYSQLUSER,
  MYSQLPASSWORD,
  MYSQLDATABASE,
  MYSQLPORT,
} from "./config.js";

import { createPool } from "mysql2/promise";
export const pool = createPool({
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  host: MYSQLHOST,
  port: MYSQLPORT,
  database: MYSQLDATABASE,
});
