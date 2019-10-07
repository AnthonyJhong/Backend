var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    id: {
        type: String //this needs to be autogenerated
    },
    time: {
        type: Date
    },
    date: {
        type: Date
    },
    description: {
        type: String
    },
    user: { //change this to a user // user
        type: String
    },
    photo: {
        //should be a jpeg 
        type: String,
        required: "Please select a picture for your post"
    }


});
module.exports = mongoose.model('Post', UserSchema);