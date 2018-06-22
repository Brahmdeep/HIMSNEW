const express =require('express');
const router=express.Router();
const axios=require('axios');
const PostAPI='http://localhost:3000/api/ZoneMsts'
const divisionApi='http://localhost:3000/api/DivisionMsts'
var mysql = require('mysql');
var path=require('path');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "brsh1091",
    database: "mydb"
  });
router.get('/',(req,res)=>{
    res.send('it works');
})
router.use(express.static(path.join(__dirname,'../dist/himsPRoject')));

//GET POST 
router.get('/zones',(req,res)=>{
    axios.get(`${PostAPI}`).then(zones=>{
        res.status(200).json(zones.data);
    })
    .catch(error=>{
        res.status(500).send(error);
    })
})
router.get('/divisions',(req,res)=>{
    axios.get(`${divisionApi}`).then(divisions=>{
        res.status(200).json(divisions.data);
    })
    .catch(error=>{
        res.status(500).send(error);
    })
})

router.post('/register',(req,res)=>{
    var name=req.body.name;
    con.connect(function(err) {
        if (err){
            console.log('error occured')
        };
        console.log("Connected!");
        var sql = "INSERT INTO customers (name, address) VALUES ?";
        var values=[
            [name,'highway']
        ];
        con.query(sql,[values], function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
     
})


module.exports=router;