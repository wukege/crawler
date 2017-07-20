// const mongoose = require('mongoose');
// mongoose.createConnection('mongodb://localhost/crawler', {
//   server: {poolSize:5}
// });
  
// var schema = new mongoose.Schema({
//     username:String,
//     password:String
// });


// var model = mongoose.model('aa',schema)

// var user = new model({
//     username:'可鬲',
//     password:'123'
// })




// user.save();


const mongoose = require('mongoose');

let db = mongoose.connect('mongodb://localhost/crawler');

db.connection.on('error', console.error.bind(console, '数据库连接失败：'));

db.connection.once('open', function() {
    console.log('数据库连接成功！');

    // 定义一个 Schema 模式
    // new Schema() 中传入一个 JSON 对象，定义属性和属性类型
    let PersonSchema = new mongoose.Schema({
        name: {
            type: String,
            unique: true
        },
        password: String
    });

    // 将该 Schema 发布为 Model
    let PersonModel = mongoose.model('col_1', PersonSchema);

    // 拿到了 Model 对象，就可以执行增删改查等操作了
    // 如果要执行查询，需要依赖 Model，当然 Entity 也是可以做到的
    PersonModel.find(function(err, result) {
        // 查询到的所有person
    });

    // 用 Model 创建 Entity
    let personEntity = new PersonModel({
        name: 'Krouky',
        password: '10086'
    });

    // Entity 是具有具体的数据库操作 CRUD 的
    // 执行完成后，数据库就有该数据了
    personEntity.save(function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(`${result} saved!`);
        }
    });
});

