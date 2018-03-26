var express = require('express');
var router = express.Router();

var path = require('path')
/* GET complaint page. */
router.get('/Complaint', function(req, res) {
  //res.render('index', { title: 'Express' });
  console.log("complain page is clicked")
  res.sendFile(path.join(__dirname + '/complaint.html'))

});


module.exports = router;
