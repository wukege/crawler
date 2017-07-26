const axios = require('axios')
const fs = require('fs')
const cheerio = require('cheerio')
const db = require('./crawler_mongo.js')
const Model = require('./crawler_model.js').Model

// axios.get('https://movie.douban.com/chart').then(res=>{
//    fs.writeFile('index.html',res.data,err =>{
//        if(err){
//            return console.log(err);
//        }
//    })
// })

async function crawler() {
    const res = await axios.get('https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0')

    if (res.data) {
        const $ = cheerio.load(res.data)
        // console.log($('.pl2 > a').text());
        // $('.subject-item .info a').each((index, el) => {

        //     // 用 Model 创建 Entity

        //     const personEntity = new Model({
        //         title: $(el).text().trim()
        //     });

        //     personEntity.save(function (err, result) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             console.log(`${result} saved!`);
        //         }
        //     });
        // })
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

crawler();


// 用 Model 创建 Entity
// for(var i=0;i<4;i++){
//     let personEntity = new Model({
// 	title: 'Krouky'+i
// });

//   personEntity.save(function(err, result) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(`${result} saved!`);
// 	}
// });
// }

// console.log(Model,333)