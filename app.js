//Init express
var express = require("express");
var app = express();

//Set ejs
app.set("view engine", "ejs");
//Add static content folder
app.use(express.static("public"));

//Routes
app.get("/", function(req,res){
   res.render("index");
});

//Init server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
