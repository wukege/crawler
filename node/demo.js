// process.on('exit',(code)=>{
//     console.log(`About to exit with code ${code}`);
//     console.log(require)
// })

// const path = require('path');
// console.log(path.parse(path.sep()))
// var url = path.resolve('/foo','/boo/','ff');
// console.log(path.sep)

// const {URL} = require('url');

// // const myUrl = new URL('/foo', 'https://example.org/');

// // console.log(url);
// console.log(URL,111)


// const { URL } = require('url');
// const myURL = new URL('/foo', 'https://example.org/');

// console.log(myURL,2222)

// <Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 6e 6f 64 65 2e 6a 73>


// const net = require('net');

// var server = net.createServer(socket => {
//     socket.on('data', data => {
//         console.log('11111')
//     });

//     socket.on('end', data => {
//         console.log('22222')
//     });
//     socket.write('3333333')
// })

// server.listen(8124,()=>{
//     console.log('server bound');
// })

const http = require('http');

http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello');

}).listen('1337','127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');