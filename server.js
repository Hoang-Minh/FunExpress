var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(path.join(__dirname, "public"))); // this will direct the app.get route ("/") always go to index.html page

// app1 works too
//var app1 = express();

// app1.get("/", function(req, res){
//     res.send("hello");
// })

app.get("/somethingelse", function(req, res){
    res.send("something else");
})
var ans = "no am not";
app.get("/areyouthere", function(req, res){
    res.send(ans);
})

app.get("/wikime", function(req, res){
    res.redirect("https://www.wikipedia.org/");
})

app.get("/sendPage", function(req, res){
    res.sendFile("public/fun.html", {root: __dirname});
})

app.listen(process.env.PORT || 3000);
//app1.listen(process.env.PORT || 3001);