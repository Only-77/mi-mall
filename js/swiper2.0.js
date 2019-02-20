function $(ele) {
	return document.querySelector(ele);
}

//二级导航
var nav_na = (function() {
	var $nav_ul = document.querySelector('.site_nav_ul'),
		$nav_liAll = $nav_ul.children,
		$nav_na = document.querySelector('.nav_na'),
		index = 0,
		$nav_na_img = document.querySelector('.nav_na_img'),
		$nav_na_ul = document.querySelector('.nav_nav_img_ul'),
		$zhankai1 = document.querySelectorAll('.zhankai1'),
		$zhankai2 = document.querySelectorAll('.zhankai2'),
		$zhankai3 = document.querySelectorAll('.zhankai3'),
		$zhankai4 = document.querySelectorAll('.zhankai4'),
		timer = null,
		obj = document.querySelector('.banner');
	for(var i = 0; i < $nav_liAll.length; i++) {
		$nav_liAll[i].index = i;
	}
	return {
		init() {
			this.event();
		},
		event() {
			var _this = this;
			for(var i = 0; i < $nav_liAll.length; i++) {
				$nav_liAll[i].onmouseenter = function(e) {
					e = e || window.event;
					var target = e.target || e.srcElement;
					if(target.nodeName === 'LI') {
						index = target.index;
						console.log(index)
						$nav_na.style.display = 'block';
						$nav_na_img.style.top = -460 * (index) + 'px';
						_this.show();
					}
				}
			}
			_this.hidden();
		},
		show() {
			$nav_na_img.onmouseenter = function() {
				$nav_na.style.display = 'block';

			}
		},
		hidden() {
			$nav_na_img.onmouseleave = function() {
				$nav_na.style.display = 'none';
			}
			$nav_ul.onmouseleave = function() {
				$nav_na.style.display = 'none';
			}
		}
	}
}())

//轮播图
var swiper = (function() {
	var obj = document.querySelector('.banner');
	imgWidth = obj.clientWidth;
	$prevBtn = obj.querySelector('.left-btn');
	$nextBtn = obj.querySelector('.right-btn');
	$bannerBox = obj.firstElementChild;
	$tipBox = $bannerBox.nextElementSibling;
	$tipAll = $tipBox.children;
	timer = null,
		index = 0;
	return {
		init() {
			for(let i = 0; i < $tipAll.length; i++) {
				$tipAll[i].index = i;
			}
			var $firstImg = $bannerBox.firstElementChild;
			var $lastImg = $bannerBox.lastElementChild;
			$bannerBox.appendChild($firstImg.cloneNode(true));
			$bannerBox.insertBefore($lastImg.cloneNode(true), $firstImg);
			$bannerBox.style.left = -imgWidth + 'px';
			this.zdshow();
			this.event();
		},
		event() {
			const self = this;
			$tipBox.addEventListener('click', function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName === 'LI') {
					clearInterval(timer);
					index = target.index;
					self.showImage();
					self.zdshow();
				}
			}, false)
			obj.onmousemove = function() {
				$prevBtn.style.background = '#000';
				$nextBtn.style.background = '#000';
			}
			obj.onmouseleave = function() {
				$prevBtn.style.background = '';
				$nextBtn.style.background = '';
			}
			$prevBtn.onclick = function() {
				index--;
				clearInterval(timer);
				self.showImage()
				self.zdshow()
			}
			$nextBtn.onclick = function() {
				index++;
				clearInterval(timer);
				self.showImage()
				self.zdshow()
			}
		},
		showImage() {
			if(index < 0) {
				$bannerBox.style.left = -($tipAll.length + 1) * imgWidth + 'px';
				index = $tipAll.length - 1;
			} else if(index > $tipAll.length - 1) {
				$bannerBox.style.left = 0;
				index = 0;
			}
			for(let i = 0; i < $tipAll.length; i++) {
				$tipAll[i].classList.remove('active');

			}
			$tipAll[index].classList.add('active');
			$bannerBox.style.opacity = 0.5;
			$bannerBox.style.left = -(index + 1) * imgWidth + 'px';
			move($bannerBox, {
				opacity: 100
			}, 500)
		},
		zdshow() {
			timer = setInterval(() => {
				index++;
				if(index > 4) {
					index = 0
				}
				for(let i = 0; i < $tipAll.length; i++) {
					$tipAll[i].classList.remove('active');
				}
				$tipAll[index].classList.add('active');
				$bannerBox.style.opacity = 0.5;
				$bannerBox.style.left = -(index + 1) * imgWidth + 'px';
				move($bannerBox, {
					opacity: 100
				}, 500)
			}, 3000)
		}
	}
}())

//导航栏下显示相应图片
var nav_list = (function() {
	var $nav = document.querySelector('.nav'),
		$a_All = $nav.children,
		$nav_ul_bigbox = document.querySelector('.nav_ul_bigbox'),
		index = 0,
		$nav_ulwrap = document.querySelector('#nav_ul_wrapper'),
		$nav_ul_box = document.querySelector('.nav_ul_box');
	for(var i = 0; i < $a_All.length; i++) {
		$a_All[i].index = i;
	}

	return {
		init() {
			this.show();
			this.event();
		},
		event() {
			for(var i = 0; i < $a_All.length; i++) {
				$a_All[i].onmousemove = function(e) {
					e = e || window.event;
					var target = e.target || e.srcElement;
					if(target.nodeName === 'A') {
						index = target.index;
						$nav_ulwrap.style.borderBottom = '1 solid #CCCCCC';
						$nav_ulwrap.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
						move($nav_ulwrap, {
							height: 231
						}, 100);
						move($nav_ul_bigbox, {
							height: 231
						}, 100)
						$nav_ul_box.style.left = -1226 * (index) + 'px';
						if(index > 4) {
							$nav_ulwrap.style.borderBottom = 'none';
							$nav_ulwrap.style.boxShadow = 'none';
							move($nav_ulwrap, {
								height: 0,
							}, 100);
							move($nav_ul_bigbox, {
								height: 0
							}, 100)
						}
					}
				}
			}
		},
		show() {
			$nav_ul_box.onmousemove = function() {
				$nav_ulwrap.style.borderBottom = '1 solid #CCCCCC';
				$nav_ulwrap.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
				move($nav_ulwrap, {
					height: 231
				}, 100);
				move($nav_ul_bigbox, {
					height: 231
				}, 100)
			}
			$nav_ulwrap.onmousemove = function() {
				$nav_ulwrap.style.borderBottom = '1 solid #CCCCCC';
				$nav_ulwrap.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
				move($nav_ulwrap, {
					height: 231
				}, 100);
				move($nav_ul_bigbox, {
					height: 231
				}, 100)
			}
			$nav_ul_box.onmouseleave = function() {
				$nav_ulwrap.style.borderBottom = 'none';
				$nav_ulwrap.style.boxShadow = 'none';
				move($nav_ulwrap, {
					height: 0,
				}, 100);
				move($nav_ul_bigbox, {
					height: 0
				}, 100)
			}
			$nav_ulwrap.onmouseleave = function() {
				$nav_ulwrap.style.borderBottom = 'none';
				$nav_ulwrap.style.boxShadow = 'none';
				move($nav_ulwrap, {
					height: 0,
				}, 100);
				move($nav_ul_bigbox, {
					height: 0
				}, 100)
			}
			$nav.onmouseleave = function() {
				$nav_ulwrap.style.borderBottom = 'none';
				$nav_ulwrap.style.boxShadow = 'none';
				move($nav_ulwrap, {
					height: 0,
				}, 100);
				move($nav_ul_bigbox, {
					height: 0
				}, 100)
			}
		}
	}
}())

//搜索栏
var search1 = (function() {
	var $search_input = document.querySelector('.search_input'),
		$search_ul = document.querySelector('.search_ul');
	return {
		init() {
			this.event();
		},
		event() {
			var _this = this;
			$search_input.onblur = function() {
				if($search_input.value.length == 0) {
					_this.show();
				}
			}
			$search_input.onfocus = function() {
				_this.hidden();
			}
		},
		show() {
			$search_ul.style.display = 'block';
		},
		hidden() {
			$search_ul.style.display = 'none';
		},
	}
}())

var search = (function() {
	var $inp = document.querySelector('.inp'),
		$ul = document.querySelector('.box2'),
		timer = null,
		$btn = document.querySelector('.btn');
	return {
		init() {
			this.event();
		},
		event() {
			var _this = this;
			$inp.onfocus = function() {
				this.oninput();
			}
			$inp.onblur = function() {
				setTimeout(function() {
					_this.hidden();
				}, 200)
			}
			$inp.oninput = function() {
				clearTimeout(timer);
				var val = this.value;
				if(val == '') {
					_this.hidden()
				} else {
					_this.show();
					timer = setTimeout(() => {
						_this.getjson(val);
					}, 500)
				}
			}
			$ul.onclick = function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName == 'LI') {
					var text = target.innerHTML;
					$inp.value = text;
					setTimeout(function() {
						_this.hidden();
					}, 200)
				}
			}
		},
		hidden() {
			$ul.style.display = 'none';
		},
		show() {
			$ul.style.display = 'block';
		},
		getjson(val) {
			var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su';
			sendJonp(url, {
				wd: val,
				cb: "search.insertData"
			})
		},
		insertData(data) {
			$ul.innerHTML = '';
			var $fragemt = document.createDocumentFragment();
			data.s.forEach(x => {
				var $li = document.createElement('li');
				$li.innerHTML = x;
				$fragemt.appendChild($li);
			})
			$ul.appendChild($fragemt);
		},
	}
}())

//倒计时
function gettime() {
	var $hour = document.querySelector('.hour'),
		$min = document.querySelector('.min'),
		$sea = document.querySelector('.sea'),
		$time = document.querySelector('.time');
	var time = new Date();
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();
	var furtime = (h - 1)
	$time.innerHTML = furtime + ':00 场';
	$hour.innerHTML = (furtime + 2) - h;
	$min.innerHTML = 60 - m;
	$sea.innerHTML = 60 - s;
}

var nierong = (function() {
	var $cont_div = $('.cont_div'),
		$cont_ul = $('.cont_ul'),
		$cont_li = $('.cont_li'),
		$liAll = $cont_li.children,
		$btn = $('.btn00'),
		$btn2 = $('.btn01'),
		index = 0;
	console.log($btn2)
	for(var i = 0; i < $liAll.length; i++) {
		$liAll[i].index = i;
	}
	return {
		init() {
			this.event();
		},
		event() {
			var _this = this;
			for(var i = 0; i < $liAll.length; i++) {
				$liAll[i].onclick = function(e) {
					e = e || window.event;
					var target = e.target || e.srcElement;
					if(target.nodeName === 'LI') {
						index = target.index;
						_this.move();
						_this.addxiaoquanquan();
					}
				}
			}
			$btn.onclick = function() {
				index--;
				_this.move();
				_this.addxiaoquanquan();
			}
			$btn2.onclick = function() {
				index++;
				_this.move();
				_this.addxiaoquanquan();
			}
		},
		move() {
			if(index > 2) {
				index = 2;
			} else if(index < 0) {
				index = 0;
			}
			move($cont_ul, {
				left: -296 * index + 1
			}, 100)
			for(let i = 0; i < $liAll.length; i++) {
				$liAll[i].classList.remove('active');
			}
			$liAll[index].classList.add('active');
		},
		addxiaoquanquan() {
			for(let i = 0; i < $liAll.length; i++) {
				$liAll[i].classList.remove('dot');
			}
			$liAll[index].classList.add('dot');
		}
	}
}())

var nierong1 = (function() {
	var $cont_div = $('.cont_div1'),
		$cont_ul = $('.cont_ul1'),
		$cont_li = $('.cont_li1'),
		$liAll = $cont_li.children,
		$btn = $('.btn10'),
		$btn2 = $('.btn11'),
		index = 0;
		for(var i = 0; i < $liAll.length; i++) {
			$liAll[i].index = i;
		}
		return {
			init() {
				this.event();
			},
			event() {
				var _this = this;
				for(var i = 0; i < $liAll.length; i++) {
					$liAll[i].classList.remove('active');
					$liAll[i].onclick = function(e) {
						e = e || window.event;
						var target = e.target || e.srcElement;
						if(target.nodeName === 'LI') {
							index = target.index;
							_this.move();
							_this.addxiaoquanquan();
						}
					}
				}
				$liAll[index].classList.add('active');
				$btn.onclick = function() {
					index--;
					_this.move();
					_this.addxiaoquanquan();
				}
				$btn2.onclick = function() {
					index++;
					_this.move();
					_this.addxiaoquanquan();
				}
			},
			move() {
				if(index > 3) {
					index = 3;
				} else if(index < 0) {
					index = 0;
				}
				move($cont_ul, {
					left: -296 * index + 1
				}, 100)
			},
			addxiaoquanquan() {
				for(let i = 0; i < $liAll.length; i++) {
					$liAll[i].classList.remove('dot');
				}
				$liAll[index].classList.add('dot');
			}
		}
	}())

var nierong2 = (function() {
	var $cont_div = $('.cont_div2'),
		$cont_ul = $('.cont_ul2'),
		$cont_li = $('.cont_li2'),
		$liAll = $cont_li.children,
		$btn = $('.btn2'),
		$btn2 = $('.btn22'),
		index = 0;
	for(var i = 0; i < $liAll.length; i++) {
		$liAll[i].index = i;
	}
	return {
		init() {
			this.event();
		},
		event() {
			var _this = this;
			for(var i = 0; i < $liAll.length; i++) {
				$liAll[i].onclick = function(e) {
					e = e || window.event;
					var target = e.target || e.srcElement;
					if(target.nodeName === 'LI') {
						index = target.index;
						_this.move();
						_this.addxiaoquanquan();
					}
				}
			}
			$btn.onclick = function() {
				index--;
				_this.move();
				_this.addxiaoquanquan();
			}
			$btn2.onclick = function() {
				index++;
				_this.move();
				_this.addxiaoquanquan();
			}
		},
		move() {
			if(index > 3) {
				index = 3;
			} else if(index < 0) {
				index = 0;
			}
			move($cont_ul, {
				left: -296 * index + 1
			}, 100)
			for(let i = 0; i < $liAll.length; i++) {
				$liAll[i].classList.remove('active');
			}
			$liAll[index].classList.add('active');
		},
		addxiaoquanquan() {
			for(let i = 0; i < $liAll.length; i++) {
				$liAll[i].classList.remove('dot');
			}
			$liAll[index].classList.add('dot');
		}
	}
}())

var nierong3 = (function() {
	var $cont_div = $('.cont_div3'),
		$cont_ul = $('.cont_ul3'),
		$cont_li = $('.cont_li3'),
		$liAll = $cont_li.children,
		$btn = $('.btn3'),
		$btn2 = $('.btn33'),
		index = 0;
	for(var i = 0; i < $liAll.length; i++) {
		$liAll[i].index = i;
	}
	return {
		init() {
			this.event();
		},
		event() {
			var _this = this;
			for(var i = 0; i < $liAll.length; i++) {
				$liAll[i].classList.remove('active');
				$liAll[i].onclick = function(e) {
					e = e || window.event;
					var target = e.target || e.srcElement;
					if(target.nodeName === 'LI') {
						index = target.index;
						_this.move();
						_this.addxiaoquanquan();
					}
				}
			}
			$liAll[index].classList.add('active');
			$btn.onclick = function() {
				index--;
				_this.move();
				_this.addxiaoquanquan();
			}
			$btn2.onclick = function() {
				index++;
				_this.move();
				_this.addxiaoquanquan();
			}
		},
		move() {
			if(index > 3) {
				index = 3;
			} else if(index < 0) {
				index = 0;
			}
			move($cont_ul, {
				left: -296 * index + 1
			}, 100)
		},
		addxiaoquanquan() {
			for(let i = 0; i < $liAll.length; i++) {
				$liAll[i].classList.remove('dot');
			}
			$liAll[index].classList.add('dot');
		}
	}
}())

