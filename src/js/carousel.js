// define([name],[deps],callback)

define(['jquery'],function(){
	// 返回一个函数|对象
	/*return function(){
		console.log(666);

		$('.box').css('border','2px solid #f00')

		return 'laoxie';
	};*/

	return {
		randomNumber:function(min,max){
			return parseInt(Math.random()*(max-min+1)) + min;
		},
		randomColor(){
			var str = '0123456789abcdef';
			var res = '#';
			for(var i=0;i<6;i++){
				res += str[this.randomNumber(0,str.length-1)]
			}
			return res;
		},
		type(data){
			return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
		}
	}
});

// 练习：把common.js封装成一个模块