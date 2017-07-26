//构造函数
function Myconstructor(message){
    this.myMessage = message;
    //私有属性
    var separator = ' _';
    var myOwner = this;

    //私有方法
    function alertMessage(){
        alert(myOwner.myMessage);
    }

    alertMessage();

    //特权方法（也是共有方法）
    this.appendToMessage = function(string){
        this.myMessage += separator + string;
        alertMessage();
    }

}
//公有方法
Myconstructor.prototype.clearMessage = function(string){
    this.myMessage = '';
}

//静态属性
Myconstructor.name = "Jeff";
//静态方法
Myconstructor.alertName = function(){
    alert(this.name);
}