const pako = require('pako');
const Base64 = require('js-base64').Base64;
// const fs = require('fs');
// var str = pako.gzip('aaaaaaaaaa',{ to: 'string' })
// fs.writeFile('test.txt', str, function (err) {
//     if (err) throw err;
//     console.log('写入完成');
//     fs.readFile('test.txt', function (err, data) {
//         if (err) throw err;
//         console.log(pako.ungzip(data.toString(),{to:'string'}));
//       });
    
//   });
//   fs.readFile('1.txt', function (err, data) {
//     if (err) throw err;
//     console.log(data.toString())
//     console.log(pako.inflateRaw(data.toString(),{to:'string'}));
//   });

// // console.log('aaaaaaaaaa');
// var s = pako.deflate('aaaaaaaaaa',{ to: 'string' })
// console.log(s);
// var str =  pako.inflate(s,{ to: 'string' })
// console.log(str)
// // const Base64 = require('js-base64').Base64;
// var str = pako.deflate('aaaaaaaaaa',{ to: 'string' })
// console.log(str);
// var str2 = "�\b\0\0\0\0\0\0�\a`I�%&/m�{J�J��t�\b�`$ؐ@������iG#)�*��eVe]f@�흼��{���{���;�N'���?\\fdl��J�ɞ!���?~|?\"v��������Ý���_��m��}���~�ُ>��g?��G���}���~�ُ>��g?��G��p?�\0�Fh�\0\0"

// var str1 = pako.inflate(str2,{to: 'string'})

// console.log(str1);





// var encode = Base64.encode('dankogai');

// console.log(Base64.decode('eWl0dWFjdGl2YXRpb250b29sJg=='))


var str = pako.gzip('aaaaaaaaaa');

// console.log(str.buffer)
// console.log(Array.from(str))
// str = JSON.stringify(str)
// str = JSON.parse(str)
// console.log(pako.ungzip(str,{to:'string'}))


// // console.log('aaaaaaaaaa');
// var s = pako.deflate('aaaaaaaaaa')
var s = pako.Deflate('aaaaaaaaaa')

console.log(s)