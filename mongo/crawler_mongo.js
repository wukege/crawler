const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my01', {
    useMongoClient: true
});
mongoose.Promise = global.Promise
const db = mongoose.connection;
db.once('open', function() {
  // we're connected!
  console.log('连接成功')
});
db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', function() {
    console.log('数据库断开，重新连接数据库');
    mongoose.connect('mongodb://localhost/my01', {server:{auto_reconnect:true}});
});

module.exports.db = db;

