 var Json =[{
	"goodsId":0,
	"src":"../imgs/1.png",
	"name":"柔肤多效BB霜 2014新款",
	"p":"经典款升级版，更轻薄更滋润",
	"price":"49.9元",
	 "val":"加入购物车"
},{
	"goodsId":1,
	"src":"../imgs/10.png",
	"name":"渐变唇膏",
	"p":"咬唇妆不用学，一抹即现",
	"price":"49.9元",
	 "val":"加入购物车"
},{
	"goodsId":1,
	"src":"../imgs/11.png",
	"name":"渐变红唇",
	"p":"柔肤多效BB霜",
	"price":"49.9元",
	 "val":"加入购物车"
},{
	"goodsId":1,
	"src":"../imgs/12.png",
	"name":"渐变美丽",
	"p":"咬唇妆不用学",
	"price":"49.9元",
	 "val":"加入购物车"
},{
	"goodsId":1,
	"src":"../imgs/13.png",
	"name":"渐变漂亮",
	"p":"柔肤多效BB霜 2016新款",
	"price":"49.9元",
	 "val":"加入购物车"
},{
	"goodsId":1,
	"src":"../imgs/14.png",
	"name":"渐变性感",
	"p":"咬唇妆不用学，一抹即现",
	"price":"49.9元",
	 "val":"加入购物车"
},{
	"goodsId":1,
	"src":"../imgs/15.png",
	"name":"渐变有货",
	"p":"柔肤多效BB霜 2014新款",
	"price":"49.9元",
	 "val":"加入购物车"
},{
	"goodsId":1,
	"src":"../imgs/16.png",
	"name":"渐变诱惑",
	"p":"咬唇妆不用学，一抹即现",
	"price":"49.9元",
	 "val":"加入购物车"
},{
	"goodsId":1,
	"src":"../imgs/17.png",
	"name":"渐变享受生活",
	"p":"柔肤多效BB霜 2014新款",
	"price":"49.9元",
	 "val":"加入购物车"

}]

	

      for(var i=0;i<Json.length;i++){
			if(i<Json.length){
				str += `<li>
					        <img src="${Json[i].url}" alt="" class="img">        
					        <p>商品名称:<p>${Json[i].name}</p></p>
					        <p>商品介绍:<p>${Json[i].p}</p></p>
					        <p>商品价格:<p>${Json[i].price}</p></p>
				        </li>`;
			}
		}

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
							// console.log(list) ;
							arr = arr.concat(list)
							arr.splice(30,5)
						}
						// console.log(arr) ;
						var str = "" ;	
						arr.forEach(ele => {
							str += `<li>
										<a href="http://localhost:8000/pages/details.html"><img src="${ele.img}"></a>
										<span>${ele.name}</span>
										<p>${ele.skuprice}</p>
									</li>`
						})
						$("#list-r ul").html(str) ;
						for(var i=20;i<arr.length;i++){
							$("#list-r li").eq(i).addClass("te") ;
						}
					}
				})
			})



