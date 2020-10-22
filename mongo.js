const mongoose = require("mongoose");

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://nodejsuser:nodejspassword@cluster0.odi7o.mongodb.net/MongoDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.on('open', function() {
    console.log("db connected")
})