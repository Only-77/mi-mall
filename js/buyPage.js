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
    // console.log($bbItem[0]);
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

            // 全部商品分类
            $allGoods.onmouseenter = function () {
                $siteNav.style.display = 'block';
            }
            // $allGoods.onmouseleave = function () {
            //     $siteNav.style.display = 'none';
            // }
            $navTitle.onmouseleave = function () {
                $siteNav.style.display = 'none';
            }
            $siteNav.onmouseleave = function () {
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