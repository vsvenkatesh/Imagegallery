var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();


       app.use(bodyParser.urlencoded({ extended: false }));
       app.use(bodyParser.json());



const pg        = require('pg');
//const express   = require('express');
//const app       = express();

const config = {
    user: 'postgres',
    database: 'postgres',
    password: 'venkat123',
    port: 5432
};

const pool = new pg.Pool(config);

app.get('/', function(req, res){
    //res.sendFile(__dirname+'/index.html'); // change the path to your index.html

   pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       console.log("connection success!!!!")

   })
});







pool.connect(function (err, client, done) {
app.get('/getWatchesList', (req, res) => {

client.query("INSERT INTO users (fname,lname,dept) values ('" 
	+ user_name + "','" + password +"','123')", function (err, result, fields) {
            //done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            //res.status(200).send(result.rows);

				console.log("insert success!!!")

              //var obj = {"users":result.rows};
                //var myJSON = JSON.stringify(obj);
              //document.getElementById("demo").innerHTML = myJSON;
                //res.end(JSON.stringify(obj));
                    //res.end(myJSON);
           //res.end(myJSON);
           //console.log(myJSON);

})
})
  })

app.listen(3000,function(){
  console.log("Started on PORT 3000");
});