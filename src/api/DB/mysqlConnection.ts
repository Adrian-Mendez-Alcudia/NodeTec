import mysql from "mysql";
const connection = mysql.createConnection({
    host: "localhost",
	user: "root",
	database: "baserancho",
});
export default connection;