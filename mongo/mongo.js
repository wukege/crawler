var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/kege");
var PersonSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 0}
});
var PersonModel = mongoose.model("Person", PersonSchema);

var PersonEntity = new PersonModel({
    name: "e",
    age: 20
});

PersonEntity.save(function (error, doc) {
    if (error) {
        console.log("error :" + error);
    } else {
       //doc是返回刚存的person对象 
        console.log(doc);
    }
});