
//二级导航
var nav_na = (function () {
    var $nav_ul = document.querySelector('.site_nav_ul'),
        $nav_liAll = $nav_ul.children,
        $nav_na = document.querySelector('.nav_na'),
        index = 0,
        $nav_na_img = document.querySelector('.nav_na_img'),
        obj = document.querySelector('.banner');
    for (var i = 0; i < $nav_liAll.length; i++) {
        $nav_liAll[i].index = i;
    }
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            for (var i = 0; i < $nav_liAll.length; i++) {
                $nav_liAll[i].onmousemove = function (e) {
                    e = e || window.event; 8
                    var target = e.target || e.srcElement;
                    if (target.nodeName === 'LI') {
                        index = target.index;
                        $nav_na.style.display = 'block';
                        $nav_na_img.style.top = -460 * (index) + 'px';
                        _this.show();
                    }
                }
            }
            _this.hidden();
        },
        show() {
            $nav_na_img.onmousemove = function () {
                $nav_na.style.display = 'block';
            }
        },
        hidden() {
            $nav_na_img.onmouseleave = function () {
                $nav_na.style.display = 'none';
            }
            $nav_ul.onmouseleave = function () {
                $nav_na.style.display = 'none';
            }
        }
    }
}())
nav_na.init();
var goodsPage = (function () {
    var $wrapMIX3 = $('#bannerMIX3_wrap');
    var $mix3_wrap = $('.mix3_wrap');
    var $banner = $('.bannerMIX3_wrap');
    var $conInfo = $('.con-info');
    var $conLeft = $('.con-left');
    var $mix3 = $('.mix3');
    var $videoWrap1 = $('.video-wrap1');
    var $iconSp1 = $('.icon-sp1');
    var $videovideo = $iconSp1.previousElementSibling;
    var $videoSrc = $('.video-src');
    var $allGoods = document.querySelector('.all-goods');
    var $siteNav = document.querySelector('.site_nav');
    var $navNa = document.querySelector('.nav_na');
    var $nav = document.querySelector('.nav');
    return {
        init() {
            this.event();
            this.top_scrollTop();
            this.showImage();

        },
        event() {
            let _this = this;
            var $play1 = $('.con-a');
            var $play2 = $('.play-10');
            var $src1 = 'images/mi_sp1.mp4';
            var $src2 = 'images/mi_sp2.mp4';
            var $navUl = $('.site_nav');
            var $allGoods = $('.all-goods');

            $play1.onclick = function () {
                _this.playvideo($src1);
            }
            $play2.onclick = function () {
                _this.playvideo($src2);
            }
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
        top_scrollTop() {
            document.body.onscroll = function () {
                var $top = document.documentElement.scrollTop;
                if ($top > 165) {
                    $mix3_wrap.className = 'mix3_wrap_js';
                } else if ($top < 165) {
                    $mix3_wrap.className = 'mix3_wrap';
                }
            }
            if (document.scrollTop >= 165) {
            }
        },
        showImage() {
            var i = 2;
            var timer = setInterval(function () {
                $banner.style.background = "url('images/index_header_" + i + ".jpg') no-repeat center";
                $wrapMIX3.style.background = "url('images/index_header_" + i + ".jpg') no-repeat center";
                if (i == 2) {
                    $conInfo.classList.remove('con-left');
                    $conInfo.classList.add('con-right');
                } else {
                    $conInfo.classList.remove('con-right');
                    $conInfo.classList.add('con-left');
                }
                if (i >= 3) {
                    i = 0;
                }
                i++;
            }, 5000)
        },
        //播放视频1
        playvideo(src) {
            $videoSrc.src = src;
            console.log($videoSrc.src);
            $videoWrap1.style.display = 'block';
            $videovideo.play();
            $iconSp1.onclick = function () {
                $videoWrap1.style.display = 'none';
                $videovideo.pause();
            }
        },
        
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
goodsPage.init();

