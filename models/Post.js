const mongoose = require("mongoose"); //Mongoose will provide us the method to create a schema

//This schema will describe how our Posts data will look, ie the format in which it will be stored in the db
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Posts", PostSchema);