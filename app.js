var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

const path = require('path');
const router = require('./routes/route')
var bodyParser = require('body-parser')


require('./mongo')

require("./model/Notes")

app.use( bodyParser.json() );
app.use("/api/", router);
app.use(express.static(path.join(__dirname, './dist/note-app-form')));

app.listen(PORT, function() {
    console.log('note-app is listening on port 3000')
});
