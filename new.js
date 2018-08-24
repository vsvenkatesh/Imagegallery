
 var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();


       app.use(bodyParser.urlencoded({ extended: false }));
       app.use(bodyParser.json());

const fs = require('fs');
'use strict';
const pg        = require('pg');
//const express   = require('express');
//const app       = express();

const config = {
    user: 'postgres',
    database: 'postgres',
    password: 'venkat123',
    port: 5432
};



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const pool = new pg.Pool(config);
// pool takes the object above -config- as parameter
  pool.connect(function (err, client, done) {

    app.get('/p', function(req, res) {
      console.log("tagid is",req.query.tagId)
  // res.send("tagId is set to " + req.query.tagId);
  var id=req.query.tagId;
// fs.readFile('student.json', (err, data) => {  
//     if (err) throw err;
//     let student = JSON.parse(data);
//     let name=student.name;
//     console.log("name is",name);

client.query("select items.id,address,name,dept from items join details on items.id=details.id where items.id="+id+"", function (err, result, fields) {
    if (err) throw err;
    var obj = {"users":result.rows};
    
          var ball=JSON.stringify(result.rows)
          console.log(ball);
          res.end(ball);
              //document.getElementById("demo").innerHTML = myJSON;
                //res.end(JSON.stringify(obj));
                    //res.end(myJSON);
           //res.end(myJSON);
           //console.log(myJSON);

 })
})

       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       console.log("connection success!!!!")

   })

      
app.listen(5000,function(){
  console.log("Started on PORT 5000");
});