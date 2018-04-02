var express = require('express');
var router = express.Router();
var json2html = require('node-json2html');

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
		var tarns = {"<>":"div","html":"<head><style> table, th, td {border: 1px solid black;border-collapse: collapse;} th, td { padding: 5px;text-align: left;} </style></head><table><tr><th>First Name</th><th>Last Name</th><th>Gaurdian Name<th></th><th>Phone Number</th><th>Aadhar Number</th><th>Country</th><th>Subject</th></tr> <tr><td>${firstname}</td><td>${lastname}</td><td>${guardianname}<td></td><td>${Phonenumber}</td><td>${Aadharnumber}</td><td>${country}</td><td>${subject}</td></tr></table><br>"};
		var html = json2html.transform(docs,tarns);
		res.write(html);
		res.end();
    });
})

module.exports = router;
