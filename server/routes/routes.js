const express =require('express');
const router=express.Router();
const axios=require('axios');
const PostAPI='http://localhost:3000/api/ZoneMsts'
const divisionApi='http://localhost:3000/api/DivisionMsts'
 
router.get('/',(req,res)=>{
    res.send('it works');
})

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


module.exports=router;