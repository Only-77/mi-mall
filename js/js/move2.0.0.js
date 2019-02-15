function move(ele , targetObj , time , callback){
    //ele 为dom元素
    //targetObj 为要改变的属性集合，可写多个
    //time 运动时间
    //callback 回调函数
    var obj = ele;
    if(typeof ele == 'string'){
        obj = $(ele);
    }
    clearInterval(obj.timer);

    //获取初始值
    //创建一个空的对象，用于存储所有传入的targetObj元素的速度
    var speedObj = {};
    for(var attr in targetObj){
        var init = parseFloat(getStyle(obj , attr));
        if(attr == 'opacity'){
            init *= 100;
        }
        //为了方便后面使用，把targetObj[attr]的值赋给target
        var target = targetObj[attr];
        //分别把各个元素的速度添加到speedObj对象中存储起来
        speedObj[attr] = (target - init) / time * 10;

    }
    console.log(speedObj);
    obj.timer = setInterval(_ => {
        var flag = true;
        // debugger;
        for(var attr in targetObj){
            //从dom对象中获取改变后的值
            var init = parseFloat(getStyle(obj , attr));
            //为了方面使用，把speedObj[attr]的值赋给speed
            var speed = speedObj[attr];
            var target = targetObj[attr];
            if(attr == 'opacity'){
                init *= 100;
            }
            init += speed;
            //判断如果速度>=0且init大于目标值时，
            //或者，speed<=0且init小于等于目标值时（为了解决目标值小于初始值的情况），
            //使他等于目标值即为已经有一个属性达到了目标值
            if((speed >= 0 && init >= target) || (speed <= 0 && init <= target)){
                //到这里已经有一个属性达到了目标值
                init = targetObj[attr];
            }else {
                flag = false;
            }
            //判断是否是透明度，如果是，给透明度单独设置，因为透明度后面没有px
            if(attr == 'opacity'){
                obj.style[attr] = init / 100 ;
            }else{
                //最后把计算得的init的值赋给css样式中的attr
                obj.style[attr] = init + 'px';
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(typeof callback == 'function'){
                callback(obj);
            }
        }
    },10)

}
//获取dom元素
function $(attr){
    return document.querySelector(attr);
}
//获取非行内样式
function getStyle(obj , attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj , null)[attr];
    }
    return obj.currentStyle[attr];
}