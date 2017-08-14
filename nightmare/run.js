
// import fs from 'fs'
// console.log('成功');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show:true });

const run = async () => {
    await nightmare.goto('http://192.168.1.124:8079/SR_BIZ/a?login');
    // await nightmare.type('#kw','百度');
    // await nightmare.click('#su');
}

run();

