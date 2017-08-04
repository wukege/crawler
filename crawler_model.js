const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    title: {
        type: String
    },
    rate:{
        type:Number
    }
});


module.exports.Model = mongoose.model('t4', PersonSchema);



  