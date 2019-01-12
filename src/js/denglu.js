function Login(){
				this.url = "http://www.liyangyf.com/ctrl/login.php";
				this.user = $("#user");
				this.pass = $("#pass");
				this.btn = $("#btn1");
				this.span1 = $(".span-4");
				
				this.init()
}
Login.prototype.init=function(){
				this.btn.click(()=>{
					this.load()
				})

Login.prototype.load=function(){
							$.ajax({
								url:this.url,
								data:{
									user:this.user.val(),
									pass:this.pass.val()
								},
								success:(res)=>{
									this.res = res;
									this.display()
								}
							})
}
Login.prototype.display=function(){
					switch(this.res){
						case "0":this.span1.html("用户名和密码不相符");break;
						case "1":this.span1.html("未知错误，请重新登录");break;
						default:
							this.span1.html("登录成功");
							setTimeout(function(){
							location.href = "index.html";
						},1000)
							this.res = JSON.parse(this.res);
							console.log(this.res.pass);
					}
			}
}
new Login()