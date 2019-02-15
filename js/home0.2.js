var mi = (function(){
    var $
}())
function $(ele) {
    return document.querySelector(ele);
}
function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    }
    return ele.currentStyle[attr];
}
mi.init();