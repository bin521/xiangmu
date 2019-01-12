;(function($){
	"use strict";
	
	$.fn.banner = function(options){
//		1.创建一个安全的空对象,用来准备作为面向对象的对象操作
		this.LOCAL = {
//			index在list中表示要走的，但是在btn中表示要进来的
			index:0,
//			12.设置一个属性准备储存在btn中要走的索引，iPrev，初始假设要进来的是0，那么要走的就是最后一张
			iPrev:options.items.length-1,
//			17.判断list是否传了,初始为false表示没传,只要传了就改成true
			listOnoff:false
		};
		var that = this;
		
//		2.解析默认参数
		this.LOCAL.autoPlay = options.autoPlay===undefined ? true : options.autoPlay;
		this.LOCAL.moveTime = options.moveTime || 200;
		this.LOCAL.delayTime = options.delayTime || 2000;
//		3.list的功能，之前，需要先判断是否传参
		if(options.list !== undefined && options.list.length > 0){
//			18.传了list,将状态改成true
			this.LOCAL.listOnoff = true;
//			9-1.初始的当前项
			options.list.children().eq(that.LOCAL.index).css({background:"red"}).siblings().css({background:""})
//			4.绑定事件
			options.list.children().on("click",function(){
//				console.log(that.LOCAL.index,$(this).index())
//				5.判断点击的索引和当前索引的大小,决定方向
				if(that.LOCAL.index < $(this).index()){
					console.log("左")
//					7-1.点击的时候,执行移动方法
					that.LOCAL.move(1,$(this).index())
				}
				if(that.LOCAL.index > $(this).index()){
					console.log("右")
//					7-2.点击的时候,执行移动方法
					that.LOCAL.move(-1,$(this).index())
				}
				
//				6.每次点击之后,将当前索引改成点击的索引
				that.LOCAL.index = $(this).index();
				
//				9-2.点击时设置list的当前项
				options.list.children().eq(that.LOCAL.index).css({background:"red"}).siblings().css({background:""})
			})
//			8.准备操作图片开始运动		  type是方向，clickIndex是点击的索引
			this.LOCAL.move = function(type,clickIndex){
//				8-1.拿到要走的,先设置从哪走,然后再设置离开之后的位置
//				8-2.拿到要进来的,先设置从哪进来,然后再设置进来之后的位置
				options.items.eq(that.LOCAL.index).css({
					left:0
				}).stop().animate({
					left:-options.items.eq(0).width() * type
				},that.LOCAL.moveTime).end().eq(clickIndex).css({
					left:options.items.eq(0).width() * type
				}).stop().animate({
					left:0
				},that.LOCAL.moveTime)
			}
		}
		
//		--------------------分割线-----------------------

//		21-2.提前封装右键的事件处理函数
		this.LOCAL.rightEvent = function(){
//			13-2.改变要进来的索引和要走的索引
			if(that.LOCAL.index == options.items.length-1){
				that.LOCAL.index = 0;
				that.LOCAL.iPrev = options.items.length-1
			}else{
				that.LOCAL.index++;
				that.LOCAL.iPrev = that.LOCAL.index-1
			}
//			14-2.开始根据计算好的索引,操作要做的和要进来的
			that.LOCAL.btnMove(-1)
		}
//		21-3.因为右键的事件处理函数不管在是否传参了按钮的情况下都声明,所以,btnmove也需要在任何情况下都声明
//		15.准备操作图片开始运动		  type是方向
		this.LOCAL.btnMove = function(type){
//			15-1.拿到要走的,先设置从哪走,然后再设置离开之后的位置
//			15-2.拿到要进来的,先设置从哪进来,然后再设置进来之后的位置
			options.items.eq(that.LOCAL.iPrev).css({
				left:0
			}).stop().animate({
				left:options.items.eq(0).width() * type
			},that.LOCAL.moveTime).end().eq(that.LOCAL.index).css({
				left:-options.items.eq(0).width() * type
			}).stop().animate({
				left:0
			},that.LOCAL.moveTime)
		
//			16.设置list的当前项，根据左右按钮能同时改变
//			19.设置list之前,先判断传了list没
			if(that.LOCAL.listOnoff){
				options.list.children().eq(that.LOCAL.index).css({background:"red"}).siblings().css({background:""})
			}
		}
		
//		10.左右按钮的功能，之前，需要先判断是否传参
		if(options.left !== undefined && options.left.length > 0 && options.right !== undefined && options.right.length > 0){
//			11-1.绑定事件
			options.left.on("click",function(){
//				13-1.改变要进来的索引和要走的索引
				if(that.LOCAL.index == 0){
					that.LOCAL.index = options.items.length-1
					that.LOCAL.iPrev = 0
				}else{
					that.LOCAL.index--;
					that.LOCAL.iPrev = that.LOCAL.index+1;
				}
//				14-1.开始根据计算好的索引,操作要做的和要进来的
				that.LOCAL.btnMove(1)
			})
//			11-2.绑定事件
//			21-1.因为在自动轮播中用到了右键的事件处理函数，所以要提前封装出来
			options.right.on("click",this.LOCAL.rightEvent)
		}
		
//		---------------分割线-----------------
//		20.自动播放的功能
		if(this.LOCAL.autoPlay){
//			21.开启计时器，不断执行右键的事件处理函数，实现自动轮播
			this.LOCAL.timer = setInterval(function(){
//				options.right.trigger("click")
				that.LOCAL.rightEvent()
			},this.LOCAL.delayTime)
			
//			22.给整个大框加鼠标进入离开事件,从而暂停或继续自动轮播
			this.hover(function(){
				clearInterval(that.LOCAL.timer)
			},function(){
				that.LOCAL.timer = setInterval(function(){
//					options.right.trigger("click")
					that.LOCAL.rightEvent()
				},that.LOCAL.delayTime)
			})
			
		}
	}
})(jQuery);
