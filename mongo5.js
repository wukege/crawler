const mongoose = require('mongoose');
mongoose.Promise = global.Promise
var promise = mongoose.connect('mongodb://localhost/my1', {
    useMongoClient: true
});

let PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    password: String
});
// promise.then(function (db) {
   

// });
promise.once('open', function() {
  // we're connected!
  console.log('连接成功')
});
promise.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

promise.on('close', function() {
    console.log('数据库断开，重新连接数据库');
    mongoose.connect('mongodb://localhost/my1', {server:{auto_reconnect:true}});
});
/* Use `db`, for instance `db.model()`*/
let PersonModel = mongoose.model('t4', PersonSchema);

// 拿到了 Model 对象，就可以执行增删改查等操作了
// 如果要执行查询，需要依赖 Model，当然 Entity 也是可以做到的
// PersonModel.find(function(err, result) {
//     console.log(result,11111)
//     // 查询到的所有person
// });

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