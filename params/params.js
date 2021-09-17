const dotenv = require('dotenv');
dotenv.config();

const DATABASECONNECTION = process.env.dburl

module.exports = {
    DATABASECONNECTION
}