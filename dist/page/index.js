require(["../js/config.js"],function(){
	require(["jquery","swiper",'cookie'],function(jquery,swiper,cookie){
		console.log(jquery)
		console.log(swiper)
		console.log(cookie)
//		console.log(car)
		$("#banner").banner({
			items:$("#banner").children(".margin").children(".bei").children("li").children("img"),
				list:$("#banner").children(".margin").children(".list"),
				
				
			autoPlay:true,		//是否自动播放，布尔值，默认true
			moveTime:500,		//移动的时间，毫秒数，默认200
			delayTime:5000
		})
		$(function(){
				$.ajax({
					url:"https://dms-dataapi.meizu.com/data/jsdata.jsonp?" ,
					dataType:"jsonp" ,
					jsonp:"callback" ,
					data:{
						blockIds:"266"
					} ,
					success:function(res){
						// console.log(res.block_266) ;
						var arr = [] ;
						
						for(var i=0;i<res.block_266.length;i++){
							var list = res.block_266[i].floorAllocations ;
							console.log(list);
							//var alist = Array.from(list)
							//console.log(alist)
							arr = arr.concat(list).slice(0,5)
						}
						console.log(arr) ;
						var str = "" ;	
						arr.forEach(ele => {
							str += `<ul class="box1 ">
											<img src="${ele.img}">
											<li class="pst">
												<p class="one">${ele.name}</p>
												<p class="two">${ele.title}</p>
												<p class="three">${ele.skuprice}</p>
												<em index = "${ele.skuid}">加入购物车 </em>
											</li>
									</ul>`
						})
						$("div#ming div.product").html(str) ;
//						for(var i=20;i<arr.length;i++){
//							$("#list-r li").eq(i).addClass("te") ;
//						}
					}
	
				})
				
				
				
				
				$(".product").on("click","em",function(){
					var id = $(this).attr("index")
					console.log(id)
					shopping = JSON.parse($.cookie("shopping"))||[]
					
					if(shopping.length<1){
						shopping.push({
							id:id,
							num:1
							
						})
					}else{
						shopping = JSON.parse($.cookie("shopping"))
						
			var isNew = false;
				for(var i =0;i<shopping.length;i++){
		if(shopping.id ===id){
			shopping[i].num++
			isNew = true;
			break;
		}
	}
	if(!isNew){
		shopping.push({
			id:id,
			num:1
			
		})
		
//		
	}
	}
	$.cookie("shopping",JSON.stringify(shopping))
		
	
				})
			})
		})
	})






