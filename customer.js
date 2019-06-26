var express = require('express');
var app = express();


var cutomersdetailsController=function(req, res){
  console.log("Invoking  rest api for customerlist list");
  var cutomersdetails = [
    {id:1, name:"Ajay", address:"ravet", city:"pune" state:"Maharashtra"},
    {id:2, name:"Rahul", address:"ram nagar", city:"mumbai" state:"Maharashtra"},
    {id:3, name:"Vijay", address:"sector 22", city:"delhi" state:"delhi"},
    {id:4, name:"Akash", address:"sector 24", city:"pune" state:"Maharashtra"},
    {id:5, name:"Yogesh", address:"sector 8", city:"gandhinagar" state:"Gujrat"},
  ];
  res.send(cutomersdetails);
};


app.get ('/cutomersdetails',cutomersdetailsController);
var server = app.listen(7000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:7000", host, port)
})