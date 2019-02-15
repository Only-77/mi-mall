/**
 * 
 * {目标元素} ele 
 * {要改变的属性名} property 
 * {目标值} target 
 */
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele , null)[attr];
    } else {
        return ele.currentStyle[attr];
    }
}
var animation = function(ele , obj , targetObj){
    // debugger;
    // console.log(parseInt(getStyle(ele , property)));
    var timer = null;
    clearInterval(ele.tiemr);
    ele.tiemr = setInterval(_ => {
        for(var attr in obj){
            var current;
            var target = obj[attr];
            if(attr === 'opacity'){
                current = Math.round(parseFloat(getStyle(ele,attr) * 100));
            }else{
                current = parseInt(getStyle(ele , attr));
            }
            var speed = (target - current) / 30;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
    
            if(attr === 'opacity'){
                ele.style[attr] = parseFloat((current + speed) / 100);
            }else{
                ele.style[attr] = current + speed + 'px';
            }
            if(typeof targetObj === 'Object'){
                animation(ele , targetObj);
            }
        }
        // console.log(current , ele. style[property]);
    },20)
}