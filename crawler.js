const axios = require('axios')
const fs = require('fs')
const cheerio =require('cheerio')


// axios.get('https://movie.douban.com/chart').then(res=>{
//    fs.writeFile('index.html',res.data,err =>{
//        if(err){
//            return console.log(err);
//        }
//    })
// })

async function crawler(){
  let res = await axios.get('https://movie.douban.com/chart')
        if(res.data){
            let $ = cheerio.load(res.data)
            console.log($('.pl2 > a').text());
        }

}

crawler();


