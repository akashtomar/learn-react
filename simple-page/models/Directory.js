const mongoose = require('mongoose');

const {Schema} = mongoose;

const DirectorySchema =  new Schema({
    name: String,
    familyName: String,
    number: String
});





module.exports = mongoose.model('Directory', DirectorySchema, 'Directory');