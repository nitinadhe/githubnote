var express = require('express');
var app = express();


var AccountdetailsController=function(req, res){
  console.log("Invoking  rest api for Accountdetails list");
  var Accountdetails = [
    {id:1, customer:"Ajay",amount:500, },
    {id:2, customer:"Rahul",amount:1500},
	 {id:2, customer:"Vijay",amount:1500},
	  {id:2, customer:"Akash",amount:1500},
    {id:3, customer:"Yogesh",amount:2500}
  ];
  res.send( Accountdetails);
};
 

app.get('/ Accountdetails',AccountdetailsController);

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8087", host, port)
})