function sendajax(url,obj){
	const xhr = new XMLHttpRequest();
	var _default = {
		method:'GET',
		data:null,
		success:undefined
	}
	for(var key in _default){
		if(key in obj){
			_default[key] = obj[key];
		}
	}
	_default.method = _default.method.toUpperCase()
	//判断请求方式
	if(_default.method == 'GET'){
		//判断请求内容前面有没有问号
		let flag = url.indexOf('?') == -1 ? "?" : "&";
		//没有问号给url添加问号
		url += flag;
		for(var i in _default.data){
			//将属性名与属性值进行拼接
			let keyValue = `${i}=${_default.data[i]}`;
			//用&进行拼接
			url += '&' + keyValue + '&';
		}
		//用截取方法移除最后的&
		url = url.slice(0,url.length - 1);
		_default.data = null;
	}else if(_default.method == 'POST'){
		//将请求内容转换成JSON字符串
		_default.method = JSON.stringify(_default.data); 
	}else{
		return;
	}
	//请求打开方式
	xhr.open(_default.method,url,true);
	//请求发送内容
	xhr.send(_default.data);
	xhr.onreadystatechange = function(){
		//4请求结束，200请求成功
		if(xhr.readyState == 4 && xhr.status == 200){
			let data = xhr.responseText;
			//判断是否输入的是个函数
			if(typeof obj.success == 'function'){
				obj.success(data);
			}else{
				_default.error && _default.error(data);
			}
		}
	} 
}
