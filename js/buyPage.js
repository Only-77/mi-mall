/**
 * 鼠标滚动时间未完成
 */



var buyPage = (function () {

    var $loginNotic = $('.login-notic');
    var $loginClose = $('.login-close');
    var $iconLeft = $('.icon-left');
    var $iconRight = $('.icon-right');
    var $LBanner = $('.L_banner');
    var $UiPager = $('.ui-pager');
    var $UiPagerA = document.querySelectorAll('.ui-pager-a');
    var $LBannerLiAll = $LBanner.children;
    var timer = null;
    var index = 0;
    for (var i = 0; i < $LBannerLiAll.length; i++) {
        $LBannerLiAll[i].index = i;
        $UiPagerA[i].index = i;
    }
    var prevIndex, nextIndex;
    var $bbItem = document.querySelectorAll('.bb-item');
    for (var i = 0; i < $bbItem.length; i++) {
        $bbItem[i].index = i;
    }
    var $bbUl = $('.bb-ul');
    var $itemSpan = $('.item-span');
    var $itemI = $('.item-i');
    var $allGoods = $('.all-goods');
    var $siteNav = $('.site_nav');
    var $navTitle = $('.nav-title');
    var $XMbuyBox = $('.xm-buyBox');
    var $right = $('.right');
    var $left = $('.left');
    var $buyBox = $('.buyBox');
    var $navNa = document.querySelector('.nav_na');
    var $nav = document.querySelector('.nav');
    var $btn1 = $('.btn1');
    var $priceP = $('.price-p');
    var $priSpan = $('.pri-span');
    return {
        init() {
            prevIndex = nextIndex = 0;
            this.event();
            this.loginClose();
            this.autoPlay();
            this.rollPlay();
        },
        event() {
            let _this = this;
            $iconLeft.onclick = function () {
                clearInterval(timer);
                _this.prevPlay();
                _this.autoPlay();
            }
            $iconRight.onclick = function () {
                clearInterval(timer);
                _this.nextPlay();
                _this.autoPlay();

            }
            $UiPager.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'A') {
                    prevIndex = nextIndex;
                    nextIndex = target.index;
                    _this.slideTo(prevIndex, nextIndex);
                }
                _this.autoPlay();
            }   
            $bbUl.onclick = function(e){
                e = e|| window.event;
                
                var target = e.target || e.srcElement;
                for(var i = 0; i < $bbItem.length ; i++){
                    $bbItem[i].classList.remove('bb-js');
                }
                if(target.nodeName === 'A'){
                    target = target.parentNode;
                    target.classList.add('bb-js');
                    
                }
                if(target.nodeName === 'I' || target.nodeName === 'SPAN'){
                    target = target.parentNode.parentNode;
                    target.classList.add('bb-js');
                }
                if(target.nodeName === 'LI'){
                    target.classList.add('bb-js');
                }
                _this.changeName(target);
                
                
                
            }
           
            // 全部商品分类
            $allGoods.onmouseenter = function(){
                $siteNav.style.display = 'block';
            }
            $nav.onmouseenter = function(){
                $siteNav.style.display = 'none';
            }
            $navNa.onmouseenter = function(){
                $siteNav.style.display = 'block';
                $navNa.onmouseleave = function(){
                $siteNav.style.display = 'none';
            }
            }
            $siteNav.onmouseleave = function(){
                $siteNav.style.display = 'none';
            }

            




        },
        // 点击关闭未登录提示
        loginClose() {
            $loginClose.onclick = function () {
                $loginNotic.style.display = 'none';
            }
        },
        prevPlay() {
            prevIndex = nextIndex;
            nextIndex--;
            if (nextIndex == -1) {
                nextIndex = $LBannerLiAll.length - 1;
            }
            this.slideTo(prevIndex, nextIndex);
        },
        nextPlay() {
            prevIndex = nextIndex;
            nextIndex++;
            if (nextIndex == $LBannerLiAll.length) {
                nextIndex = 0;
            }
            this.slideTo(prevIndex, nextIndex);
        },
        autoPlay() {
            let _this = this;
            timer = setInterval(_ => {
                _this.nextPlay();
            }, 2000)

        },
        slideTo(prev, next) {
            $UiPagerA[prev].className = 'ui-pager-a';
            $UiPagerA[next].className = 'ui-pager-a ui-pager-a-js';
            animation($LBannerLiAll[prev], { 'opacity': 0 });
            animation($LBannerLiAll[next], { 'opacity': 100 });
        },
        // 鼠标滚动事件
        rollPlay(){
            console.log($right.scrollHeight);
            document.body.onscroll = function(){
                var $dn = document.documentElement.scrollTop;
                if($dn > 245){
                    $left.style.marginTop = $dn - 245 + 'px';
                }
                if($dn > 1229){
                    $left.style.marginTop = 968 + 'px';
                }
            }
        },
        //点击改变商品名
        changeName (target){
            console.log(target.index);
            if(target.index == 0){
                $priceP.innerHTML = `<strong>小米MIX 3 故宫特别版 10GB+ 256GB 宝石蓝</strong><i>4999元</i>`;
                $priSpan.innerText = '4999元'
            }
            if(target.index == 1){
                $priceP.innerHTML = `<strong>小米MIX 3 全网通版 8GB+128GB 宝石蓝</strong><i>3599</i>`;
                $priSpan.innerText = '3599元'
            }
            if(target.index == 2){
                $priceP.innerHTML = `<strong>小米MIX 3 全网通版 6GB+128GB 黑色</strong><i>3299</i>`;
                $priSpan.innerText = '3299元'
            }
            if(target.index == 3){
                $priceP.innerHTML = `<strong>小米MIX 3 全网通版 8GB+256GB 黑色</strong><i>3999元</i>`;
                $priSpan.innerText = '3999元'
            }
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
buyPage.init();