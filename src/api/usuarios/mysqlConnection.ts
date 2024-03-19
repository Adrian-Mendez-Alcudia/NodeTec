import mysql from "mysql";
const connection = mysql.createConnection({
    host: "localhost",
	user: "Rancho",
    password: "Vegetales7",
	database: "alecrmama",
});
export default connection;