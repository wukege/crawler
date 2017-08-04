const xlsx = require('node-xlsx');
const fs = require('fs');

console.log(__dirname);

var workbook = xlsx.parse(`${__dirname}/test.xlsx`);

// 处理Excel文件问题
// 	1、先必须制定一套Excel模板文件
// 	2、下载模板文件
// 	3、给模板文件添加内容
// 	4、上传模板文件