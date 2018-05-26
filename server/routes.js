const router = require("express").Router();

router
  .get("/users",(req,res,next)=>{
    res.json({
      users:[
        {id:1,name: "Junior"},
        {id:2,name: "Bill"},
        {id:3,name: "Andrew"},
        {id:4,name: "Daisy"},
        {id:5,name: "Jennifer"}
      ]
    })
  })

module.exports = router;