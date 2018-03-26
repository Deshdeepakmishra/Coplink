var express = require('express');
var router = express.Router();

var path = require('path')

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname + '/index.html'))

});
router.get('/Complaint', function(req, res) {
  //res.render('index', { title: 'Express' });
  console.log("complain page is clicked from index.js")
  res.sendFile(path.join(__dirname + '/complaint.html'))

});

router.post('/Complaint', function(req, res){
    console.log('post method is called')
    var db = req.db;
    var collection = db.get('complains');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? {msg : 'successfully submited!'} : { msg: err }
        );
    });
})

router.get('/complainList', function(req, res) {
    console.log('complainList get method')
    var db = req.db;
    var db = req.db;
    var collection = db.get('complains');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
})


module.exports = router;
