'use strict'

var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
console.log('todoMdl :: -----------');
module.exports = mongoose.model('ToDo',  new Schema({
    name : {
        type : String,
        required :  'Kindly Enter the name of the todo'
    },
    creationDate : {
        type : Date,
        default : Date.now
    },
    status : {
        type : [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
          }],
        default: ['pending']
    }
}));
