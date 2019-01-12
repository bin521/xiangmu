require(["config"], function() {
	require(["jquery", "swiper"], function( $, swiper) {

		$(".baozhang div:nth-child(2)").hover(function() {
			$(".product-service-d").show()
		}, function() {
			$(".product-service-d").hide()
		})

		$(".aaa").hover(function() {
			$(this).children($(".max-w")).css({
				"color": "red"
			});
			//		$(this).children($(".f000")).css({"display":"block"});
		}, function() {
			//					$(this).children($(".f000")).css({"display":"none"});
			$(this).children($(".max-w")).css({
				"color": "black"
			});

		})

		var index = 0;
		$(".you").click(function() { //点击右边的事件
			index++;
			if(index > 2) {
				index = 2;
			}
			$(".zi").animate({
				left: index * -74
			})
		})
		$(".zuo").click(function() { //点击zuo边的事件
			index--;
			if(index < 0) {
				index = 0;
			}
			$(".zi").stop().animate({
				left: index * -74
			})
		})
		
		//  tab
		$(".zi li").hover(function() {
			$(".imgs1 li").eq($(this).index()).show().siblings().hide();
			$(this).css("border", "1px solid red").siblings().css("border", "1px solid #ffffff")
		})
		$(".zi li").hover(function() {
			$(".imgs2 li").eq($(this).index()).show().siblings().hide();
			$(this).css("border", "1px solid red").siblings().css("border", "1px solid #ffffff")
		})
		
		//  放大镜
		var scale = $(".imgs2 img").height() / $(".imgs1").height();

		$(".imgs1").on("mousemove", function(e) {
			var _left = e.pageX - $(this).offset().left - $(".smallCursor").width() / 2;
			var _top = e.pageY - $(this).offset().top - $(".smallCursor").height() / 2;
			$(".smallCursor").css({
				left: Math.min(Math.max(0, _left), $(".imgs1").width() - $(".smallCursor").width()),
				top: Math.min(Math.max(0, _top), $(".imgs1").height() - $(".smallCursor").height())
			})
			$(".imgs2 img").css({
				left: -$(".smallCursor").position().left * scale,
				top: -$(".smallCursor").position().top * scale
			})
		})

//  小图（放大镜的）
		$(".imgs1").hover(function() {
			$(".smallCursor").show();
			$(".imgs2").fadeIn(200);
		}, function() {
			$(".smallCursor").hide();
			$(".imgs2").hide();
		})

	})
})
