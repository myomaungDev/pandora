import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 9000;

const DB_HOST = process.env.DB_HOST;

const DB_PORT = process.env.DB_PORT;

const DB_NM = process.env.DB_NM;

const DB_USER = process.env.DB_USER;

const DB_PASSWORD = process.env.DB_PASSWORD;

export { SERVER_PORT, DB_HOST, DB_NM, DB_PASSWORD, DB_PORT, DB_USER };
