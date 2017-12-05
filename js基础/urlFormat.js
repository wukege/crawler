let url = 'http://www.kege.com?ww=1111&dd=222';

function queryUrlFormat(url){
  let obj = {};
  if(url.indexOf('?') < 0) return obj;
    url = url.split('?')[1].split('&');
    for(let i=0;i<url.length;i++){
      let temp = url[i].split('=');
      obj[temp[0]] = temp[1];
    }
    return obj;
}

// console.log(queryUrlFormat(url));

function queryUrlFormat1(url) {
  let obj = {};
  let reg = /([^?&=]+)=([^?&=]+)/g
  url.replace(reg,function () {
    obj[arguments[1]] = arguments[2];
  });
  return obj;
}

String.prototype.myUrlFormat = function () {
  let obj = {};
  let reg = /([^?&=]+)=([^?&=]+)/g
  this.replace(reg,(...arg) => {
    obj[arg[1]] = arg[2];
  });
  return obj;
};



console.log(queryUrlFormat1(url));
console.log(url.myUrlFormat())