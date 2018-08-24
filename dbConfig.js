const pg        = require('pg');
const express   = require('express');
const app       = express();

var client  = new pg.Client({
    user: 'postgres',
    database: 'postgres',
    password: 'venkat123',
    port: 5432
});
client.connect();
module.exports.myconnection = client;
