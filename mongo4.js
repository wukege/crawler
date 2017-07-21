const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/app', {server:{auto_reconnect:true}});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.once('open' ,() => {
	console.log('连接数据库成功')
})

db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', function() {
    console.log('数据库断开，重新连接数据库');
    mongoose.connect('mongodb://localhost/myapp', {server:{auto_reconnect:true}});
});

let PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    password: String
});

let PersonModel = mongoose.model('t2', PersonSchema);

 // 用 Model 创建 Entity
    let personEntity = new PersonModel({
        name: 'Krouky1',
        password: '10086'
    });

      personEntity.save(function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(`${result} saved!`);
        }
    });