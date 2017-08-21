
var EventUtil = {
    addHander:function(element,type,hander){
        if(element.addEventListener){
            element.addEventListener(type,hander,false)
        }else if(element.attachEvent){
            element.attachEvent('on'+type,hander)
        }else{
            element['on'+type] = hander
        }
    },
    removeHander:function(element,type,hander){
        if(element.removeEventListener){
            element.removeEventListener(type,hander,false)
        }else if(element.detachEvent){
            element.detachEvent('on'+type,hander)
        }else{
            element['on'+type] = null;
        }

    }
}