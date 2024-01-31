/**
 * DOT.BB
 * By Sam Wilcox <sam@dot-bb.com
 * 
 * https://www.dot-bb.com
 * 
 * View the user-end license agreement at:
 * https://license.dot-bb.com
 */

const mysql = require('mysql');
databasePool = null;

/**
 * Database Class
 * 
 * This class represents the database for DOT.BB.
 * Contains all neccessary logic for database connection and management.
 * 
 * @class
 */
class Database {
    constructor() {
        // Blank for now.
    }

    /**
     * Connects to the database.
     * 
     * @memberof Database
     * @method connect
     */
    connect() {
        require('dotenv').config();

        databasePool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            connectionLimit: 90
        });
    }
}

module.exports = Database;