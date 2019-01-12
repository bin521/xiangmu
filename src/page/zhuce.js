function Register() {
	this.url = "http://www.liyangyf.com/ctrl/register.php";
	this.user = $("#user");
	this.pass = $("#pass");
	this.pass1 = $("#pass1");
	this.btn = $("#btn1");
	this.span1 = $(".span-4");
	this.span2=$(".span-1");
	this.user.click(()=>{
		this.user.mouseout(()=>{
			if(this.user.val().length>8){
				this.span2.html("账号的长度不能超过8位");
				setInterval(()=>{
					this.span2.html("")
				},2000)
			}
		})
	})
	
	this.init();
}
Register.prototype.init=function(){
		//这段代码的作用就是:当点击注册按钮时判断如果没写用户名提示用户名不能为空然后在判断两次输入的密码是否一致,如果一致且用户名不为空然后在把
	//		这些数据放进接口中来进行判断接口中是否存在这些数据,如果存在显示用户名重复如果不重复跳转到登录页面
	this.btn.click(()=>{
		if(this.user.val() == "" && this.pass.val() != "" && this.pass1.val() != ""){
			this.span1.html("用户名不能为空");
			
			this.user.mouseover(()=>{
				this.span1.html("");
			})
		}
		else if(this.user.val()!=""){
			if(this.pass.val() != "" && this.pass1.val() != ""){
				if(parseInt(this.pass.val())==parseInt(this.pass1.val())){
					$.ajax({
					url: this.url,
					data: {
						tel: this.user.val(),
						pass: this.pass.val()
					},
					success: (res)=>{

						this.res = res;
						console.log(this.res)
						this.display();
					}
					})
				}
				else{
					this.span1.html("两次密码不一致");
					this.pass.mouseover(()=>{
					this.span1.html("");
				})
				this.pass1.mouseover(()=>{
					this.span1.html("");
				})
				}
			}
			else if(this.pass.val()=="" || this.pass1.val()==""){
				this.span1.html("密码不能为空");
				this.pass.mouseover(()=>{
					this.span1.html("");
				})
				this.pass1.mouseover(()=>{
					this.span1.html("");
				})
			}
		}
		else{
			this.span1.html("请将所有信息输入完整")
		}
	})
}
Register.prototype.display = function() {
	switch(this.res) {
		case "0":
			this.span1.html("用户名重复，请换一个");
			setTimeout(()=>{
				this.span1.html("");
			},2000)
//			this.btn.mouseout(function(){
//				this.span1.html("");
//			})这个地方有疑惑以后解决
			break;
		case "1":
			this.span1.html("注册成功");
			setTimeout(()=>{
				location.href = "login.html";
			}, 1000)
			break;
		case "2":
			this.span1.html("请将所有信息输入完整");
			break;
	}
}
new Register()