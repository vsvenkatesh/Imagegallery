


const pg        = require('pg');
const express   = require('express');
const app       = express();

const config = {
    user: 'postgres',
    database: 'postgres',
    password: 'venkat123',
    port: 5432
};
id="demo"

// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);

app.get('/users/:id', (req, res, next) => {
  var value = req.params.id;
   pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       console.log("connection success!!!!")
       //res.end('connection success!!!!');
       //res.end('myJSON.rows');
       client.query("SELECT * FROM user1 WHERE id = '" + value + "'", function (err, result, fields) {
            //done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            //res.status(200).send(result.rows);



              var obj = {"users":result.rows};
                var myJSON = JSON.stringify(obj);
              //document.getElementById("demo").innerHTML = myJSON;
                //res.end(JSON.stringify(obj));
                    //res.end(myJSON);
           res.end(myJSON);
  
            //console.log(myJSON)
       })
   })
});

app.listen(4003, function () {
    console.log('Server is running.. on Port 4003');
});

