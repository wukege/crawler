const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const db = require('./db');

// const ROOT = path.join(__dirname, 'www');
// http.createServer((req, res) => {
//     switch (req.method) {
//         case 'POST':
//             console.log('get')
//             break;
//         case 'GET':
//             let pathname = url.parse(req.url).pathname
//             let query = url.parse(req.url, true).query;

//             db.query(`SELECT name FROM t1 WHERE name='${query.name}';`, function (error, results, fields) {
//                 if (error) {
//                     console.log('数据库错误');
//                     return
//                 };
//                 if (results.length > 0) {
//                     res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
//                     res.end('已注册-_-');
//                 } else {

//                     db.query(`INSERT INTO t1 (name,password) VALUES('${query.name}','${query.password}');`, function (error, results, fields) {
//                         console.log(error, results, fields);
//                         if (error) {
//                             console.log('数据库错误', 22222);
//                             return
//                         };
//                         fs.readFile(path.join(ROOT, pathname), (err, file) => {
//                             if (err) {
//                                 res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
//                                 res.end('找不到相关文件-_-');
//                                 return;
//                             }
//                             res.writeHead(200);
//                             res.end(file);
//                         })
//                     })
//                 }
//             });
//             break;
//     }
// }).listen('3000', '127.0.0.1');

http.createServer((req, res) => {
    res.setHeader('Set-Cookie', [serialize('foo', 'bar'), serialize('baz', 'val')]);
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end('hello');
    // console.log(parserCookie(req.headers.cookie));
}).listen('3000', '127.0.0.1');

console.log('server running 3000');


// function parserCookie(cookie) {
//     var cookies = {};
//     if (!cookie) {
//         return cookies;
//     }
//     var list = cookie.split(';');
//     for (var i = 0, len = list.length; i < len; i++) {
//         var pair = list[i].split('=');
//         cookies[pair[0].trim()] = pair[1]
//     }
//     return cookies;
// }


// Set-Cookie: name=value; Path=/; Expires=Sun, 23-Apr-23 09:01:35 GMT; Domain=.domain.com;
var serialize = function (name, val, opt) {
    var pairs = [name + '=' + val];
    opt = opt || {};
    if (opt.maxAge) pairs.push('Max-Age=' + opt.maxAge);
    if (opt.domain) pairs.push('Domain=' + opt.domain);
    if (opt.path) pairs.push('Path=' + opt.path);
    if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
    if (opt.httpOnly) pairs.push('HttpOnly');
    if (opt.secure) pairs.push('Secure');
    return pairs.join('; ');
};



// res.setHeader('Set-Cookie', [serialize('foo', 'bar'), serialize('baz', 'val')]);


