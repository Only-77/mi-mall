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
				$nav_liAll[i].onmousemove = function(e) {
					e = e || window.event;
					var target = e.target || e.srcElement;
					if(target.nodeName === 'LI') {
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
			$nav_na_img.onmousemove = function() {
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
nav_na.init();

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
swiper.init()

//导航栏下显示相应图片
var nav_list = (function() {
	var $nav = document.querySelector('.nav'),
		$a_All = $nav.children,
		$nav_ul_bigbox = document.querySelector('.nav_ul_bigbox'),
		index = 0,
//		$nav_ulwrap = document.querySelector('#nav_ulwrap'),
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
//						$nav_ulwrap.style.borderBottom = '1 solid #CCCCCC';
//						$nav_ulwrap.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';	
						$nav_ul_bigbox.style.borderBottom = '1 solid #CCCCCC';
						$nav_ul_bigbox.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';					
						move($nav_ul_bigbox, {
							height: 231
						}, 100);
						$nav_ul_box.style.left = -1226 * (index) + 'px';
						if(index > 4) {
							move($nav_ul_bigbox, {
								height: 0,
							}, 100);
						}
					}
				}
			}
		},
		show() {
			$nav_ul_box.onmousemove = function() {
//				$nav_ulwrap.style.borderBottom = '1 solid #CCCCCC';
//						$nav_ulwrap.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
				$nav_ul_bigbox.style.borderBottom = '1 solid #CCCCCC';
				$nav_ul_bigbox.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
				move($nav_ul_bigbox, {
					height: 231
				}, 100);
			}
			$nav_ul_box.onmouseleave = function() {
				move($nav_ul_bigbox, {
					height: 0,
				}, 100);
			}
			$nav.onmouseleave = function() {
				move($nav_ul_bigbox, {
					height: 0,
				}, 100);
			}
		}
	}
}())
nav_list.init()

//搜索栏 ********还差ajax发送请求
var search = (function() {
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
		sendajax() {

		},
	}
}())
search.init();

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
	var furtime = (h + 1)
	$time.innerHTML = furtime + ':00 场';
	$hour.innerHTML = (furtime - 1) - h;
	$min.innerHTML = 60 - m;
	$sea.innerHTML = 60 - s;
}
setInterval(gettime, 1000);
gettime()




