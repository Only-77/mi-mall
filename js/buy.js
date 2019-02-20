var shop = (function () {
    var $name = $('.price-p strong'),
        $price = $('.price-p i'),
        $btn1 = $('.btn1'),
        num = 0;

    return {
        init(target) {
            this.event();
        },
        event() {
            var _this = this;
            num++;
            var cartObj = {};
            cartObj.img = 'images/mix3-01.jpg';
            cartObj.name = $name.innerHTML;
            cartObj.price = $price.innerHTML;
            cartObj.num = num;
            cartObj.total = parseInt($price.innerText) * num + '元';
            $btn1.onclick = function () {
                //点击跳转的页面
                location.href = 'successful-GWC.html';
                console.log(cartObj);
                var json = [cartObj];
                json = JSON.stringify(json);
                sendAjax('php/cart.php', {
                    type: 'POST',
                    data: json,
                    success(data) {
                        console.log(data);
                    }

                })
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
shop.init();
