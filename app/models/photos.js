var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photosSchema = new Schema({
    imgUrl: {type: String, require: true }
});

module.exports = mongoose.model('Photos', photosSchema);
