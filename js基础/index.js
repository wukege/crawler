// // let CreateDiv = function(html){
// //     this.html = html;
// //     this.init();
// // }

// // CreateDiv.prototype.init = function(){
// //     let div = document.createElement('div');
// //     div.innerHTML = this.html;
// //     document.body.appendChild(div);
// // }

// // // 代理实现单体模式
// // var ProxyMode = (function(){
// //     var instance;
// //     return function(html) {
// //         if(!instance) {
// //             instance = new CreateDiv("我来测试下");
// //         }
// //         return instance;
// //     } 
// // })();
// // var a = new ProxyMode("aaa");
// // var b = new ProxyMode("bbb");
// // console.log(a===b);// true

// // test.addEventListener('click',function(){
// //     alert(this.innerHTML)
// // })

// // function CustomType(){
// //     this.name = 'test'
// // }

// // CustomType.prototype.getName = function(){
// //     return this.name;
// // }


// // var application = (function(){
// //      // 定义私有
// //      var privateA = "aa";
// //      // 定义私有函数
// //      function A(){};

// //      // 实例化一个对象后，返回该实例，然后为该实例增加一些公有属性和方法
// //      var object = new CustomType();

// //      // 添加公有属性
// //      object.A = "aa";
// //      // 添加公有方法
// //      object.B = function(){
// //          return privateA;
// //      }
// //      // 返回该对象
// //      return object;
// // })()

// // console.log(application.getName());


// // // 先申明一个对象
// // var TeaAndMilkGirl = function(name) {
// //     this.name = name;
// // };
// // // 这是先生
// // var Ceo = function(girl) {
// //     this.girl = girl;
// //     // 送结婚礼物
// //     this.sendMarriageRing = function(ring) {
// //         console.log("Hi " + this.girl.name + ", ceo送你一个礼物：" + ring);
// //     }
// // };
// // // 代理，来代替送
// // var ProxyObj = function(girl){
// //     this.girl = girl;
// //     // 
// //     this.sendGift = function(gift) {
// //         // 
// //         (new Ceo(this.girl)).sendMarriageRing(gift);
// //     }
// // };  
// // // 初始化
// // var proxy = new ProxyObj(new TeaAndMilkGirl("奶茶妹"));
// // proxy.sendGift("结婚戒"); //

// // 不使用代理的预加载图片函数如下
// // var myImage = (function () {
// //     var imgNode = document.createElement("img");
// //     document.body.appendChild(imgNode);
// //     var img = new Image();
// //     img.onload = function () {
// //         imgNode.src = this.src;
// //     };
// //     return {
// //         setSrc: function (src) {
// //             imgNode.src = "http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif";
// //             img.src = src;
// //         }
// //     }
// // })();
// // // 调用方式
// // myImage.setSrc("https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png");


// // var myImage = (function () {
// //     var imgNode = document.createElement("img");
// //     document.body.appendChild(imgNode);
// //     return {
// //         setSrc: function (src) {
// //             imgNode.src = src;
// //         }
// //     }
// // })();
// // // 代理模式
// // var ProxyImage = (function () {
// //     var img = new Image();
// //     img.onload = function () {
// //         myImage.setSrc(this.src);
// //     };
// //     return {
// //         setSrc: function (src) {
// //             myImage.setSrc("http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif");
// //             img.src = src;
// //         }
// //     }
// // })();
// // // 调用方式
// // ProxyImage.setSrc("https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png");







// // var setCommand = function(button,func) {
// //     button.onclick = function(){
// //         func();
// //     }
// //  }; 
// //  var MenuBar = {
// //     refersh: function(){
// //         alert("刷新菜单界面");
// //     }
// //  };
// //  var SubMenu = {
// //     add: function(){
// //         alert("增加菜单");
// //     }
// //  };
// //  // 刷新菜单
// //  var RefreshMenuBarCommand = function(receiver) {
// //     return function(){
// //         receiver.refersh();    
// //     };
// //  };
// //  // 增加菜单
// //  var AddSubMenuCommand = function(receiver) {
// //     return function(){
// //         receiver.add();    
// //     };
// //  };
// //  var refershMenuBarCommand = RefreshMenuBarCommand(MenuBar);
// //  // 增加菜单
// //  var addSubMenuCommand = AddSubMenuCommand(SubMenu);
// //  setCommand(b1,refershMenuBarCommand);
 
// //  setCommand(b2,addSubMenuCommand);



     
// //  // 定义setCommand 函数，该函数负责往按钮上面安装命令。点击按钮后会执行command对象的execute()方法。
// //  var setCommand = function(button,command){
// //     button.onclick = function(){
// //         command.execute();
// //     }
// //  };
// //  // 下面我们自己来定义各个对象来完成自己的业务操作
// //  var MenuBar = {
// //     refersh: function(){
// //         alert("刷新菜单目录");
// //     }
// //  };
// //  var SubMenu = {
// //     add: function(){
// //         alert("增加子菜单");
// //     },
// //     del: function(){
// //         alert("删除子菜单");
// //     }
// //  };
// //  // 下面是编写命令类
// //  var RefreshMenuBarCommand = function(receiver){
// //     this.receiver = receiver;
// //  };
// //  RefreshMenuBarCommand.prototype.execute = function(){
// //     this.receiver.refersh();
// //  }
// //  // 增加命令操作
// //  var AddSubMenuCommand = function(receiver) {
// //     this.receiver = receiver;
// //  };
// //  AddSubMenuCommand.prototype.execute = function() {
// //     this.receiver.add();
// //  }
// //  // 删除命令操作
// //  var DelSubMenuCommand = function(receiver) {
// //     this.receiver = receiver;
// //  };
// //  DelSubMenuCommand.prototype.execute = function(){
// //     this.receiver.del();
// //  }
// //  // 最后把命令接收者传入到command对象中，并且把command对象安装到button上面
// //  var refershBtn = new RefreshMenuBarCommand(MenuBar);
// //  var addBtn = new AddSubMenuCommand(SubMenu);
// //  var delBtn = new DelSubMenuCommand(SubMenu);
 
// //  setCommand(b1,refershBtn);
// //  setCommand(b2,addBtn);
// //  setCommand(b3,delBtn);



// var command1 = {
//     execute: function(){
//         console.log(1);
//     }
// }; 
// var command2 = {
//     execute: function(){
//         console.log(2);
//     }
// };
// var command3 = {
//     execute: function(){
//         console.log(3);
//     }
// };
// // 定义宏命令，command.add方法把子命令添加进宏命令对象，
// // 当调用宏命令对象的execute方法时，会迭代这一组命令对象，
// // 并且依次执行他们的execute方法。
// var command = function(){
//     return {
//         commandsList: [],
//         add: function(command){
//             this.commandsList.push(command);
//         },
//         execute: function(){
//             for(var i = 0,commands = this.commandsList.length; i < commands; i+=1) {
//                 this.commandsList[i].execute();
//             }
//         }
//     }
// };
// // 初始化宏命令
// var c = command();
// c.add(command1);
// c.add(command2);
// c.add(command3);
// c.execute();  // 1,2,3







// var strategys = {
//     isNotEmpty: function(value,errorMsg) {
//         if(value === '') {
//             return errorMsg;
//         }
//     },
//     // 限制最小长度
//     minLength: function(value,length,errorMsg) {
//         if(value.length < length) {
//             return errorMsg;
//         }
//     },
//     // 手机号码格式
//     mobileFormat: function(value,errorMsg) {
//         if(!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
//             return errorMsg;
//         }
//     } 
// };
// var Validator = function(){
//     this.cache = [];  // 保存效验规则
// };
// Validator.prototype.add = function(dom,rule,errorMsg) {
//     var str = rule.split(":");
//     this.cache.push(function(){
//         // str 返回的是 minLength:6 
//         var strategy = str.shift();
//         str.unshift(dom.value); // 把input的value添加进参数列表
//         str.push(errorMsg);  // 把errorMsg添加进参数列表
//         return strategys[strategy].apply(dom,str);
//     });
// };
// Validator.prototype.start = function(){
//     for(var i = 0, validatorFunc; validatorFunc = this.cache[i++]; ) {
//         var msg = validatorFunc(); // 开始效验 并取得效验后的返回信息
//         if(msg) {
//             return msg;
//         }
//     }
// };

// var validateFunc = function(){
//     var validator = new Validator(); // 创建一个Validator对象
//     /* 添加一些效验规则 */
//     validator.add(registerForm.userName,'isNotEmpty','用户名不能为空');
//     validator.add(registerForm.password,'minLength:6','密码长度不能小于6位');
//     validator.add(registerForm.userName,'mobileFormat','手机号码格式不正确');

//     var errorMsg = validator.start(); // 获得效验结果
//     return errorMsg; // 返回效验结果
// };
// var registerForm = document.getElementById("registerForm");
// registerForm.onsubmit = function(){
//     var errorMsg = validateFunc();
//     if(errorMsg){
//         alert(errorMsg);
//         return false;
//     }
// };



// 策略对象
// var strategys = {
//     isNotEmpty: function(value,errorMsg) {
//         if(value === '') {
//             return errorMsg;
//         }
//     },
//     // 限制最小长度
//     minLength: function(value,length,errorMsg) {
//         if(value.length < length) {
//             return errorMsg;
//         }
//     },
//     // 手机号码格式
//     mobileFormat: function(value,errorMsg) {
//         if(!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
//             return errorMsg;
//         }
//     } 
// };
// var Validator = function(){
//     this.cache = [];  // 保存效验规则
// };
// Validator.prototype.add = function(dom,rules) {
//     var self = this;
//     for(var i = 0, rule; rule = rules[i++]; ){
//         (function(rule){
//             var strategyAry = rule.strategy.split(":");
//             var errorMsg = rule.errorMsg;
//             self.cache.push(function(){
//                 var strategy = strategyAry.shift();
//                 strategyAry.unshift(dom.value);
//                 strategyAry.push(errorMsg);
//                 return strategys[strategy].apply(dom,strategyAry);
//             });
//         })(rule);
//     }
// };
// Validator.prototype.start = function(){
//     for(var i = 0, validatorFunc; validatorFunc = this.cache[i++]; ) {
//     var msg = validatorFunc(); // 开始效验 并取得效验后的返回信息
//     if(msg) {
//         return msg;
//     }
//     }
// };
// // 代码调用
// var registerForm = document.getElementById("registerForm");
// var validateFunc = function(){
//     var validator = new Validator(); // 创建一个Validator对象
//     /* 添加一些效验规则 */
//     validator.add(registerForm.userName,[
//         {strategy: 'isNotEmpty',errorMsg:'用户名不能为空'},
//         {strategy: 'minLength:6',errorMsg:'用户名长度不能小于6位'}
//     ]);
//     validator.add(registerForm.password,[
//         {strategy: 'minLength:6',errorMsg:'密码长度不能小于6位'},
//     ]);
//     validator.add(registerForm.phoneNumber,[
//         {strategy: 'mobileFormat',errorMsg:'手机号格式不正确'},
//     ]);
//     var errorMsg = validator.start(); // 获得效验结果
//     return errorMsg; // 返回效验结果
// };
// // 点击确定提交
// registerForm.onsubmit = function(){
//     var errorMsg = validateFunc();
//     if(errorMsg){
//         alert(errorMsg);
//         return false;
//     }
// }


// let rules = [1,2,3,4,5]

// for(var i = 0, rule; rule = rules[i++]; ){
//    console.log(rule)
// }

// for(var i = 0;i < rules.length;i++ ){
//     console.log('aaa')
//  }

//  console.log(rules[0])
//  console.log(rules[1])
//  console.log(rules[2])
//  console.log(rules[3])
//  console.log(rules[4])
//  console.log(rules[5])
//  console.log(rules[6])
//  console.log(rules[7])

//  console.log(rules[8])


// var shoeObj = {}; // 定义发布者
// shoeObj.list = []; // 缓存列表 存放订阅者回调函数
        
// // 增加订阅者
// shoeObj.listen = function(fn) {
//     shoeObj.list.push(fn);  // 订阅消息添加到缓存列表
// }

// // 发布消息
// shoeObj.trigger = function(){
//     for(var i = 0,fn; fn = this.list[i++];) {
//         fn.apply(this,arguments); 
//     }
// }
// // 小红订阅如下消息
// shoeObj.listen(function(color,size){
//     console.log("颜色是："+color);
//     console.log("尺码是："+size);  
// });

// // 小花订阅如下消息
// shoeObj.listen(function(color,size){
//     console.log("再次打印颜色是："+color);
//     console.log("再次打印尺码是："+size); 
// });
// shoeObj.trigger("红色",40);
// shoeObj.trigger("黑色",42);





// var shoeObj = {}; // 定义发布者
// shoeObj.list = []; // 缓存列表 存放订阅者回调函数
        
// // 增加订阅者
// shoeObj.listen = function(key,fn) {
//     if(!this.list[key]) {
//         // 如果还没有订阅过此类消息，给该类消息创建一个缓存列表
//         this.list[key] = []; 
//     }
//     this.list[key].push(fn);  // 订阅消息添加到缓存列表
// }

// // 发布消息
// shoeObj.trigger = function(){
//     var key = Array.prototype.shift.call(arguments); // 取出消息类型名称
//     var fns = this.list[key];  // 取出该消息对应的回调函数的集合

//     // 如果没有订阅过该消息的话，则返回
//     if(!fns || fns.length === 0) {
//         return;
//     }
//     for(var i = 0,fn; fn = fns[i++]; ) {
//         fn.apply(this,arguments); // arguments 是发布消息时附送的参数
//     }
// };

// // 小红订阅如下消息
// shoeObj.listen('red',function(size){
//     console.log("尺码是："+size);  
// });

// // 小花订阅如下消息
// shoeObj.listen('block',function(size){
//     console.log("再次打印尺码是："+size); 
// });
// shoeObj.trigger("red",40);
// shoeObj.trigger("block",42);






// var Event = (function(){
//     var list = {},
//           listen,
//           trigger,
//           remove;
//           listen = function(key,fn){
//             if(!list[key]) {
//                 list[key] = [];
//             }
//             list[key].push(fn);
//         };
//         trigger = function(){
//             var key = Array.prototype.shift.call(arguments),
//                  fns = list[key];
//             if(!fns || fns.length === 0) {
//                 return false;
//             }
//             for(var i = 0, fn; fn = fns[i++];) {
//                 fn.apply(this,arguments);
//             }
//         };
//         remove = function(key,fn){
//             var fns = list[key];
//             if(!fns) {
//                 return false;
//             }
//             if(!fn) {
//                 fns && (fns.length = 0);
//             }else {
//                 for(var i = fns.length - 1; i >= 0; i--){
//                     var _fn = fns[i];
//                     if(_fn === fn) {
//                         fns.splice(i,1);
//                     }
//                 }
//             }
//         };
//         return {
//             listen: listen,
//             trigger: trigger,
//             remove: remove
//         }
// })();
// // 测试代码如下：
// Event.listen("color",function(size) {
//     console.log("尺码为:"+size); // 打印出尺码为42
// });
// Event.trigger("color",42);

let http = require('http');

console.log(http.request);