const db = require('mysql');


const connection = db.createConnection({
    host:"localhost",
    user:"root",
    password:"qq123",
    database:"ke"
});

connection.connect();

connection.query(`SELECT * FROM dep`,(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(JSON.stringify(data));
    }
})



