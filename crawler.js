const axios = require('axios')
// const fs = require('fs')
// const cheerio = require('cheerio')
// const db = require('./crawler_mongo.js')
// const Model = require('./crawler_model.js').Model

// axios.get('https://movie.douban.com/chart').then(res=>{
//    fs.writeFile('index.html',res.data,err =>{
//        if(err){
//            return console.log(err);
//        }
//    })
// })

// async function crawler() {
    
//     for(let i=0;i<=80;i+=20){
//     let url = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start='+i;
//         const res = await axios.get(url)
//         if (res.data) {
//             const subs = res.data.subjects;
//             for (let i = 0; i < subs.length; i++) {
//                 const personEntity = new Model({
//                     title:subs[i].title,
//                     rate:subs[i].rate
//                 });

//                 personEntity.save(function (err, result) {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(`${result} saved!`);
//                     }
//                 });
//             }
//         }
//     }
    
// }
let url = 'http://192.168.1.191:8680/infoDetail/31';

for(let i=0;i<500;i++){
  axios.get(url).then(res=>{
   console.log(res)
})
}

// crawler();


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