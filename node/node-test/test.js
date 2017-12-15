// console.log(__dirname)
// console.log(__filename)
// console.log(global)

const fs = require('fs');

// fs.unlink('./test',err =>{
//   if(err) throw err;
//     console.log('删除成功')
// });


// fs.unlinkSync('./test');
// console.log('删除成功')

fs.stat('test', (err, stats) => {
  if (err) throw err;
  console.log(`文件属性: ${JSON.stringify(stats)}`);
});


function getQueryString(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
