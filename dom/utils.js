(function () {

    if (!window.utils) {
        window['utils'] = {};
    }
    //检测浏览器
    function isCompatible(ather) {
        if (ather === false ||
            !Array.prototype.push ||
            !Object.hasOwnProperty ||
            !document.createElement ||
            !document.getElementsByTagName
        ) {
            return false
        }
        return true
    }
    window['utils']['isCompatible'] = isCompatible;
    //使用id获取元素
    function $(id) {
        var elements = new Array();

        for (var i = 0; i < arguments.length; i++) {
            var element = arguments[i];
            if (typeof element == 'string') {
                element = document.getElementById(element);
            }
            if (arguments.length == 1) {
                return element;
            }
            elements.push(element);
        }
        return elements;
    }
    window['utils']['$'] = $;

    function alertNodeName(id) {
        alert($(id).nodeName);
    }
    window['utils']['showNodeName'] = alertNodeName;

    function addEvent(node, type, listener) {
        if (!(node = $(node))) {
            return false
        }
        if (node.addEventListener) {
            node.addEventListener(type, listener, false);
            return true;
        } else if (node.attachEvent) {
            node.attachEvent('on' + type, listener);
            return true;
        }
        return false;
    }
    window['utils']['addEvent'] = addEvent;
    //注意使用removeEventListener只能移除外部函数
    function removeEvent(node, type, listener) {
        if (!(node = $(node))) {
            return false
        }
        if (node.removeEventListener) {
            node.removeEventListener(type, listener, false);
            return true
        } else if (node.adtachEvent) {
            node.adtachEvent('on' + type, listener)
            return true
        }
        return false
    }
    window['utils']['removeEvent'] = removeEvent;



}())