// const db = require('mysql');
const axios = require('axios');

async function crawler() {
    const res = await axios.get('https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0')

    if (res.data) {
        const $ = cheerio.load(res.data)
       
        if (res.data) {
            const subs = res.data.subjects;
            for (let i = 0; i < subs.length; i++) {
                const personEntity = new Model({
                    title:subs[i].title,
                    rate:subs[i].rate
                });

                personEntity.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`${result} saved!`);
                    }
                });
            }
        }
    }

}



// const connection = db.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "qq123",
//     database: "ke"
// });

// connection.connect();

// connection.query(`SELECT * FROM t1`,(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(JSON.stringify(data));
//     }
// })

