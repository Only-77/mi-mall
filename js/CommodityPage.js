var CommodityPage = (function () {
    var $allGoods = document.querySelector('.all-goods');
    var $siteNav = document.querySelector('.site_nav');
    var $navNa = document.querySelector('.nav_na');
    var $nav = document.querySelector('.nav');
    return {
        init() {
            this.event();
            // this.bannerPlay()
        },
        event() {
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
            
            $(document).ready(function () {
                $('.prev').click(function () {
                    $('.ban-img1').fadeIn();
                    $('.ban-img2').fadeOut();
                    $('.ban-img2').css({ "display": "none" });
                    $('.item2 a').css({ 'background': 'rgba(255, 255, 255, 0.4)' });
                    $('.item1 a ').css({ 'background': 'rgba(0,0,0,0)' });
                    $('.next').click(function () {
                        $('.ban-img2').fadeIn();
                        $('.ban-img1').fadeOut();
                        $('.ban-img1').css({ "display": "none" });
                        $('.item1 a').css({ 'background': 'rgba(255, 255, 255, 0.4)' });
                        $('.item2 a ').css({ 'background': 'rgba(0,0,0,0)' });
                    });
                });
                $('.next').click(function () {
                    $('.ban-img1').fadeIn();
                    $('.ban-img2').fadeOut();
                    $('.ban-img2').css({ "display": "none" });
                    $('.item2 a').css({ 'background': 'rgba(255, 255, 255, 0.4)' });
                    $('.item1 a ').css({ 'background': 'rgba(0,0,0,0)' });
                    $('.prev').click(function () {
                        $('.ban-img2').fadeIn();
                        $('.ban-img1').fadeOut();
                        $('.ban-img1').css({ "display": "none" });
                        $('.item1 a').css({ 'background': 'rgba(255, 255, 255, 0.4)' });
                        $('.item2 a ').css({ 'background': 'rgba(0,0,0,0)' });
                    });
                });
            })    
        },
    }
}())
CommodityPage.init();