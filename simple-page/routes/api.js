const router = require('express').Router();
const Directory = require('./../models/Directory');
router.get('/createdata', (req, res)=>{
    let recordArray = [];
    for(let i=0; i< 10000;i++){
        let recordObject = {
            name: "namename "+ i,
            familyName: "familyfamily "+i,
            number: "+91-77777777"
        };
        recordArray.push(recordObject);
    }
    Directory.insertMany(recordArray).then((doc)=>{
        //console.log(doc);
        res.send("Inserted");
    }).catch((err)=>{
        console.log(err);
        res.send("Error while inserting");
    });

});

router.get('/data', (req, res)=>{
    console.log(req.query);
    let pageSize = 10;
    let pageNumber = req.query.pNum;
    Directory.find({}, {_id: 0, __v: 0}).skip(pageSize * (pageNumber-1)).limit(pageSize)
        .then((docs)=>{
            //console.log(docs);
            res.json(docs);
        })
})


module.exports = router;