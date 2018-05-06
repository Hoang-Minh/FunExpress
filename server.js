// get: get something from server, and send to front end
// post: 
var express = require("express");
var app = express();
var path = require("path");
var bodyparser = require("body-parser");

app.use(express.static(path.join(__dirname, "public"))); // this will direct the app.get route ("/") always go to index.html page
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true})); // if json object is passed, it will handle to nested object, nested array.
// app1 works too
//var app1 = express();

// app1.get("/", function(req, res){
//     res.send("hello");
// })

app.get("/somethingelse", function (req, res) {
    res.send("something else");
})
var ans = "no am not";
app.get("/areyouthere", function (req, res) {
    res.send(ans);
})

app.get("/wikime", function (req, res) {
    res.redirect("https://www.wikipedia.org/");
})

app.get("/sendPage", function (req, res) {
    res.sendFile("public/fun.html", {
        root: __dirname
    }); // sendFile for static file
})

app.get("/something", function (req, res) {
    res.redirect("fun.html"); // look for in the index.html where we direct the /something in the a link tag
})

var userArr = [];
var obj = {
    name: "due",
    age: 50
};
userArr.push(obj);
app.get("/wantUsers", function (req, res) {
    // res.send("This is coming from the server");
    res.send(userArr);
})

app.post("/posty", function(req, res){
    //console.log("This is posty");
    console.log(req.body);
    userArr.push(req.body);
})

app.listen(process.env.PORT || 3000);
//app1.listen(process.env.PORT || 3001);