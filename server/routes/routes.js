const express =require('express');
const router=express.Router();
const axios=require('axios');
const PostAPI='http://localhost:3000/api/ZoneMsts'

 
router.get('/',(req,res)=>{
    res.send('it works');
})

//GET POST 
router.get('/posts',(req,res)=>{
    axios.get(`${PostAPI}`).then(posts=>{
        res.status(200).json(posts.data);
    })
    .catch(error=>{
        res.status(500).send(error);
    })
})

module.exports=router;