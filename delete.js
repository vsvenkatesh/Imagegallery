var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var sha256 = require('sha256');



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



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);
 pool.connect(function (err, client, done) {
app.post('/delete',function(req,res){
  console.log("this is",req.body);
  var id=req.body.id;
  //var password=req.body.password;
  console.log("pass is",id);
  client.query("DELETE FROM images1 WHERE id='"+ id +"'"  , function (err, result, fields) {
    if (err) throw err;
    var obj = {"users":result.rows};
    console.log(result.rows);
        res.send(result.rows);
  //res.end("success");
})
  })

app.post('/Save',function(req,res){
  console.log("this is",req.body);
  var tags=req.body.tags;
  var category=req.body.category;
  var images=req.body.images;
  var id=req.body.id;
  //var password=req.body.password;
  console.log("pass is",tags);
  client.query("UPDATE images1 SET location = '"+ images +"',type = '"+ category +"',tags = '"+ tags +"' WHERE id = '"+ id +"'", function (err, result, fields) {
    if (err) throw err;
    var obj = {"users":result.rows};
    console.log(result.rows);
        res.send(result.rows);
  //res.end("success");
})
  })



app.post('/Insert',function(req,res){
  console.log("this is",req.body);
  var tags=req.body.tags;
  var category=req.body.category;
  var images=req.body.images;
  //var password=req.body.password;
  console.log("pass is",tags);
  client.query("INSERT INTO images1 VALUES('"+ images +"','"+ category +"','"+ tags +"')", function (err, result, fields) {
    if (err) throw err;
    var obj = {"users":result.rows};
    console.log(result.rows);
        res.send(result.rows);
  //res.end("success");
})
  })


app.post('/signup',function(req,res){
  console.log("this is",req.body);
  var fname=req.body.fname;
  var lname=req.body.lname;
  var email=req.body.email;
  var password=req.body.password;
  var md=sha256(password);
  console.log(md);
  //var password=req.body.password;
 
  client.query("INSERT INTO users VALUES('"+ fname +"','"+ lname +"','"+ email +"','"+ md +"')", function (err, result, fields) {
    if (err) throw err;
    var obj = {"users":result.rows};
    console.log(result.rows);
        res.send(result.rows);
  //res.end("success");
})
  })
 



       

   

app.get('/users3', function(req, res){
  console.log(req.query);
    //res.sendFile(__dirname+'/index.html'); // change the path to your index.html

   pool.connect(function (err, client, done) {

console.log(req.body);
              
                
              //document.getElementById("demo").innerHTML = myJSON;
                //res.end(JSON.stringify(obj));
                    //res.end(myJSON);
           //res.end(myJSON);
           //console.log(myJSON);
            if (err) {
           console.log("Can not connect to the DB" + err);
       }
       console.log("connection success!!!!")

})
})
});

      

app.listen(3008,function(){
  console.log("Started on PORT 3008");
});



