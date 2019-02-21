var buycart = (function () {
    var $buyCartBox = $('.buy-cart-box'),
        $listBody = $('.list-body'),
        $priceG = $('.price-g i'),
        a = 0;
    return {
        init() {
            this.addHTML();
            this.event();
            this.num();
            this.cz();

        },
        event() {
            var _this = this;
        },
        addHTML() {
            var _this = this;
            sendAjax('php/buyCart.php', {
                type: 'GET',
                success(data) {
                    data = JSON.parse(data);
                    for (var i = 0; i < data.length; i++) {
                        a = data[i].length;
                        // console.log(data[i][0]);
                        var $div = document.createElement('div');
                        $div.innerHTML = `
                                <div class="col col-check">
                                    <i class="icon-checkbox col">√</i>
                                </div>
                                <div class="col col-img">
                                    <a href="javascript:;">
                                        <img src="${data[i][a - 5]}"/>
                                    </a>
                                </div>
                                <div class="col col-name at">	
                                ${data[i][a - 4]}</div>
                                <div class="col col-price">${data[i][a - 3]}</div>
                                <div class="col col-num">
                                    <div class="change-goods-num">
                                        <a href="JavaScript:;" class="minus">-</a>
                                        <input type="text" class="val" value="${data[i][a - 2]}"/>
                                        <a href="JavaScript:;" class="add">+</a>
                                    </div>
                                </div>
                                <div class="col col-total color">
                                ${data[i][a - 1]}
                                </div>
                                <div class="col col-action cz"><button class="at">x</button></div>
                        `;
                        $div.className = 'item-table';
                        $listBody.appendChild($div);


                    }
                    var $itemTable = $listBody.children;
                    for(var j = 0 ; j <data.length ; j++){
                        $itemTable[j].setAttribute('id' , data[j][0]);
                    }
                    _this.cz($itemTable);
                    for(var k = 0 ; k<data.length ; k++){
                        _this.num($itemTable[k].id,data[k][4]);
                    }

                }

            })

        },
        num(id ,number) {
            var $minus = $('.minus'),
            $add = $('.add'),
            val = $('.val'),
            $pri = parseInt($('.list-body .col-price').innerHTML),
            $total = parseInt($('.list-body .col-total').innerHTML);
            
            $priceG.innerHTML = $pri*val.value;
            $minus.onclick = function(){
                number--;
                if(number <= 0){
                    number = 1;
                }
                val.value = number;
                total = $pri*number + '元';
                // console.log(total);
                var json = {id,number,total};
                sendAjax('php/numberOf.php',{
                    type:'GET',
                    data:json,
                    success(data){
                        total = $('.list-body .col-total');
                        $priceG.innerHTML = $pri*data;
                        total.innerHTML = $priceG.innerHTML + '元';
                    }
                })
            }
            $add.onclick = function(){
                number++;
                val.value = number;
                total = $pri*number + '元';
                // console.log(total);
                var json = {id,number,total};
                sendAjax('php/numberOf.php',{
                    type:'GET',
                    data:json,
                    success(data){
                        total = $('.list-body .col-total');
                        $priceG.innerHTML = $pri*data;
                        total.innerHTML = $priceG.innerHTML + '元';
                    }
                })
            }
        },
        cz($itemTable) {
            var _this = this;
            // console.log($itemTable);
            for (var i = 0; i < $itemTable.length; i++) {
                $itemTable[i].onclick = function (e) {
                    e = e|| window.event;
                    var target = e.target || e.srcElement;
                    if(target.nodeName === 'BUTTON'){
                        var id = target.parentNode.parentNode.getAttribute('id');
                        var json = {id};
                        // console.log(typeof json)
                        sendAjax('php/deleteCart.php',{
                            type:'GET',
                            data:json,
                            success(data){
                                $priceG.innerHTML = 0;
                                target.parentNode.parentNode.remove();
                                if($priceG.innerHTML){
                                    location.href = 'GouWuChe.html';
                                }
                            }
                        })
                    }
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
buycart.init();