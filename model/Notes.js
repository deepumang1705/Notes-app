const mongoose = require("mongoose");

const notes_schema = new mongoose.Schema({
    title: {
        type: String,
        required: "title is required"
    },
    content: {
        type: String,
        required: "content is required"
    }
})

module.exports = mongoose.model("Notes", notes_schema)