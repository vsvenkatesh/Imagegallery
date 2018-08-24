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
app.post('/login',function(req,res){
	console.log("this is",req.body);
  var user_name=req.body.username;
  //var password=req.body.password;
  console.log("User name = "+user_name+"");
  //res.end("success");
  client.query("SELECT * FROM users WHERE fname = '" + user_name + "'", function (err, result, fields) {
    if (err) throw err;
    var obj = {"users":result.rows};
    console.log(obj);
				res.send(JSON.stringify(result.rows));
res.end("result.rows");
              
                
              //document.getElementById("demo").innerHTML = myJSON;
                //res.end(JSON.stringify(obj));
                    //res.end(myJSON);
           //res.end(myJSON);
           //console.log(myJSON);

})


})
  })

app.get('/users/:url', function(req, res){
    //res.sendFile(__dirname+'/index.html'); // change the path to your index.html
    var Url = req.params.url;
    //console.log("url",Url);
    res.end("url is",Url);
   pool.connect(function (err, client, done) {



       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       console.log("connection success!!!!")

   })
});

      

app.listen(3000,function(){
  console.log("Started on PORT 3000");
});



