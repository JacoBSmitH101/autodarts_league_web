const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config("./.env");
console.log(process.env.DB_PASSWORD);
const pool = new Pool({
    user: "bot",
    host: "192.168.1.105",
    database: "adbot_database",
    password: "bot", // replace with your actual password
    port: 5432,
});

export const db = {
    query: (text, params) => pool.query(text, params),
    getClient: () => pool.connect(),
};
