var app = require('express')();
var http = require('http').Server(app);
var hbs = require('hbs');
var fs = require('fs'); //file system
var bodyParser = require('body-parser');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(bodyParser.json());

app.get('/', function(req, res){ //takes in request and response


    res.render(__dirname + '/signup.html', {
        'welcomeMessage': 'Connecting women in their communities!',
    });

});

app.post('/message', function(req, res){
    console.log(req.body); // log web input to console
    var messages = req.body;//JSON.parse(fs.readFileSync('messages.json', 'utf8'));//read a file
    //messages.push(req.query);
    fs.writeFileSync('messages.json', JSON.stringify(messages));
    res.sendStatus(200);
})

http.listen(3000, function() {
    console.log("listening on port 3000");
})



function passvisible() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


/* for later if have time
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
*/
