const pg        = require('pg');
const express   = require('express');
const app       = express();
var path = require('path');
var fs = require('file-system');

const config = {
    user: 'postgres',
    database: 'postgres',
    password: 'venkat123',
    port: 5432
};

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};
// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);

app.use('/public', express.static(__dirname + "/public"));

 app.get('/img', (req, res, next) => {
   // var value = req.params.name;
//   // //var values = req.params.pwd;
var value="jak";
   console.log("name",value);


   //var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/img") {
      //res.sendFile("/root/expressproject/img.html");
        fs.readFile("img.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200);
                res.write(pgResp);
                console.log("names",value);
                res.write('<img  class="img-circle" src= "public/images/'+ value +'.jpg"  />' + req.url);
            }
             
            res.end();
        });
    } else {
        //4.
        res.writeHead(200);
        res.write('<img src="http://localhost:4000/img/images/jak.jpg"></img>da' + req.url);
        res.end();
    }




   pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       console.log("connection success!!!!")
       //res.end('connection success!!!!');
       //res.end('myJSON.rows');
//        client.query("SELECT * FROM imgs WHERE name = '" + value + "'", function (err, result, fields) {
//             //done();
//             if (err) {
//                 console.log(err);
//                 res.status(400).send(err);
//             }
//             //res.status(200).send(result.rows);


// console.log("data",result.rows);
//               var obj = {"users":result.rows};
//                 var myJSON = JSON.stringify(obj);
//                 res.end(myJSON);
//            //    //document.getElementById("demo").innerHTML = myJSON;
//            //      //res.end(JSON.stringify(obj));
//            //          //res.end(myJSON);
//            // res.end(myJSON);
  
//             //console.log(myJSON)
//        })
   })
 });


app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});

