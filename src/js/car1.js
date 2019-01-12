class Car{
			constructor(options){
				this.url = options.url;
				this.tbody = options.tbody;
				
				this.load()
				this.addEvent()
			}
			load(){
				$.ajax({
					url:this.url,
					success:(res)=>{
						this.res = res;
						this.getCookie();
					}
				})
			}
			getCookie(){
				this.shopping = JSON.parse($.cookie("shopping"));
				this.display()
			}
			display(){
				var str = "";
				this.res.forEach((resValue)=>{
					this.shopping.forEach((shopping)=>{
						if(resValue.index== shoppingValue.id){
							str += `<thead>
                    <tr>
                        <td class="one"></td>
                        <td>全选</td>
                        <td>商品信息</td>
                        <td>单价</td>
                        <td>数量</td>
                        <td>金额</td>
                        <td>操作</td>
                    </tr>
                </thead>`
						}
					})
				})
				this.tbody.html(str);
			}
			addEvent(){
				var that = this;
				this.tbody.on("click","span",function(){
					that.id = $(this).parent().parent().attr("index");
					$(this).parentsUntil("tbody").remove()
					that.remove()
				})
				
				this.tbody.on("input","input",function(){
					that.num = $(this).val()
					that.id = $(this).parent().parent().attr("data-id");
					that.changeCookie()
				})
			}
			remove(){
				for(var i=0;i<this.shopping.length;i++){
					if(this.shopping[i].id == this.id){
						break;
					}
				}
				this.shopping.splice(i,1);
				$.cookie("shopping",JSON.stringify(this.shopping))
			}
			changeCookie(){
				for(var i=0;i<this.shopping.length;i++){
					if(this.shopping[i].id == this.id){
						this.shopping[i].num = this.num;
					}
				}
				$.cookie("shopping",JSON.stringify(this.shopping))
			}
		}
		
		
		new Car({
			url:"https://dms-dataapi.meizu.com/data/jsdata.jsonp?",
			tbody:$("tbody")
		})
