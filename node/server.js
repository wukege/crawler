const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const db = require('./db');

const ROOT = path.join(__dirname, 'www');
http.createServer((req, res) => {
    switch (req.method) {
        case 'POST':
            console.log('get')
            break;
        case 'GET':
            let pathname = url.parse(req.url).pathname
            let query = url.parse(req.url, true).query;

            db.query(`SELECT name FROM t1 WHERE name='${query.name}';`, function (error, results, fields) {
                if (error) {
                    console.log('数据库错误');
                    return
                };
                if (results.length > 0) {
                    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                    res.end('已注册-_-');
                } else {

                    db.query(`INSERT INTO t1 (name,password) VALUES('${query.name}','${query.password}');`, function (error, results, fields) {
                        console.log(error, results, fields);
                        if (error) {
                            console.log('数据库错误', 22222);
                            return
                        };
                        fs.readFile(path.join(ROOT, pathname), (err, file) => {
                            if (err) {
                                res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
                                res.end('找不到相关文件-_-');
                                return;
                            }
                            res.writeHead(200);
                            res.end(file);
                        })
                    })
                }
            });
            break;
    }
}).listen('3000', '127.0.0.1');

