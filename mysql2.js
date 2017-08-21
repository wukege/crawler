const db = require('mysql');


const connection = db.createConnection({
    host: "localhost",
    user: "root",
    password: "qq123",
    database: "ke"
});

connection.connect();

// connection.query(`SELECT * FROM t1`,(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(JSON.stringify(data));
//     }
// })

// //获取最大值
// connection.query(`select max(age) from t1`,(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(JSON.stringify(data));
//     }
// })

// //获取最大值
// connection.query(`select min(age) from t1`,(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(JSON.stringify(data));
//     }
// })

//查看表结构
// connection.query(`desc t1`,(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(JSON.stringify(data));
//     }
// })

//获取name字段后转换为大小
connection.query(`select Upper(name) as name_upper from t1`, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data));
    }
})

