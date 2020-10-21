const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmi.html");
});

//post the calculation
app.post("/", function (req, res) {

    let weight = Number(req.body.weight);
    let height = Number(req.body.height)/100;
    let result = weight / Math.pow(height, 2);
    result = result.toFixed(2);

    //sending response to the result in bmi.html page
    res.render('form', {result:result});
});
    
//server listening to port 3000
app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});


