var mi = (function () {
    var $phoneWrap = $('#phone_wrapper');
    var $mix3 = $('.mi_mix3');
    var $phoneUl = $('.phoneUl');
    var $phoneLiAll = $phoneUl.children;
    for(var i = 0 ; i < $phoneLiAll.length ; i++){
        $phoneLiAll[i].index = i;
    }
    // console.log($phoneLiAll.index);
    var index = null;
    return {
        init() {
            this.event();
        },
        event() {
            let _this = this;
            this.showPhone();

        },
        showPhone() {
        }
    }
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