var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pageSchema = new Schema({
  title: {type: String, require:false},
  url: {type: String, index:{unique:true}}, //set to unique to avoid duplicate URL aliases
  content: {type: String},
  menuIndex: {type:Number},
  data: Date
}):

module.export = mongoose.model('Page', pageSchema);
