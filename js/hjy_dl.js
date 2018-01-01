//选项卡
$("#xxk1").addClass("aclass");
$("#xxk2").click(function(){
	$("#xxk2").css({"border-bottom":"2px solid #DC0F50","color":"#DC0F50"})
	$("#xxk1").css({"border-bottom":"2px solid transparent","color":"#000"})
	$("#DLform22").css("display","block");
	$("#DLform").css("display","none");
	$(".i2").click(function(){
		$(".dianhua").animate({"top":0},2000,function(){})
		})
})
$("#xxk1").click(function(){
	$("#xxk1").css({"border-bottom":"2px solid #DC0F50","color":"#DC0F50"})
	$("#xxk2").css({"border-bottom":"2px solid transparent","color":"#000"})
	$("#DLform22").css("display","none");
	$("#DLform").css("display","block");
})
//COOKIE
	$(window).load(function(){
		//判断cookie是否存在
		if( document.cookie ){ // ""
			var obj = getCookie("cookie");//根据对应的键找到值
//			$("#DLtex").val(obj.uname);
//			$("#DLpsd").val(obj.upwd);
		}
	})
//正则
$("#DLtex").focus(function(){
	$(".label1").css("border","1px solid red")
})
var flag = [false,false];
$("#DLtex").blur(function(){
//手机号	
	var oSJH = $(this).val();
	var obj = getCookie("cookie");//根据对应的键找到值
	console.log(obj.uname)
	if( obj.uname == oSJH ){
		flag[0] = true;
		$(".label1 .b").css("display","inline-block");
		$(".label1").css("border","")
		$(".hint").css("display","none");
	}else{
		flag[0] = false;
		$(".hint").css("display","block");
		$("#hint").html("此账号不存在")
	}
})
//密码
$("#DLpsd").focus(function(){
	$(this).parent().css("border","1px solid red")
})
$("#DLpsd").blur(function(){
	var oPSD = $(this).val();
	var reg=/^[^\s]{6,16}$/;
	var obj = getCookie("cookie");//根据对应的键找到值
	if( obj.upwd == oPSD ){
		flag[1] = true;
		$(".label2 .b").css("display","inline-block");
		$(".label2").css("border","")
		$(".hint").css("display","none");
	}else{
		flag[1] = false;
		$(".hint").css("display","block");
		$("#hint").html("输入密码有误")
	}
})
$("#DLbtn").click(function(){
	var iii = false;
		for(var i=0;i<flag.length;i++){
			console.log(flag[i])
			if(!flag[i]){
//				console.log(flag[i])
				alert("请仔细检查");
				iii = true;
			}
		}
		if(iii){
			return;
		}else{
			alert("通过")
			location.href = "HJY.html";
		}
	//取出cookie中的用户名和密码
	/*if( $("input[type='checkbox']").is(':checked') ){
			//存cookie
			var json = {
				"uname":$("#DLtex").val(),
				"upwd":$("#DLpsd").val()
			}
			setCookie("cookie",JSON.stringify(json),1);
			alert("设置cookie成功");
		}
	var obj = getCookie("cookie");//根据对应的键找到值
		$("#DLtex").val(obj.uname);
		$("#DLpsd").val(obj.upwd);
		if( obj.uname == $("#DLtex").val() && obj.upwd == $("#DLpsd").val() ){
			location.href = "HJY.html";
		}else{
			alert("登录失败");
		}*/
	}) 

//验证 手机号码
$("#DLtex2").focus(function(){
	$(".label12").css("border","1px solid red")
})
$("#DLtex2").keyup(function(){
	var v = $(this).val();
	$("#DLtex2").val(  v.substr(0,11) );//截取前11个字符
})
$("#DLtex2").blur(function(){
	var oSJH = $(this).val();
	if(reg.test(oSJH)){
		$(".label12 .b2").css("display","inline-block");
		$(".label12").css("border","");
		$(".hint").css("display","none");
//		flag[0]=true;
	}else{
		$(".label12 .b2").css("display","none");
		$(".hint2").css("display","block");
		$("#hint2").html("输入密码有误")
//		flag[0]=false;
	}
})
//随机四位验证码
function getRandom(n){//随机4位数字
	var sNum="";
	for(var i=0;i<n;i++){
		var num=Math.floor(Math.random()*10);
		sNum+=num;
	}
	$(".sjyzm22").html(sNum);
//	oRandom.innerHTML=sNum;	
}
$(window).load(function(){
	getRandom(4);
})
$(".sjyzm22").click(function(){
	getRandom(4);
	$(this).animate({"background-position-y":"0px"},1000,function(){
		$(this).animate({"background-position-y":"80px"},1000,function(){})
	})
})
$("#DLpsd2").focus(function(){
	$(this).parent().css("border","1px solid red")
})
$(".DLpsd2").blur(function(){
	var oJPG = $(this).val();
	var oYZM = $(".sjyzm22").html();
	if( oJPG == oYZM ){
		$(".hint2").css("display","none");
		$(".label22 .b2").css("display","inline-block");
		$(this).parent().css("border","");
	}else{
		$(".hint2").css("display","block");
		$("#hint2").html("输入图片验证码有误")
	}
})
$("#DLpsd20").focus(function(){
	$(this).parent().css("border","1px solid red")
})
$("#DLpsd20").blur(function(){
	var DLpsd20 = $(this).val();
	if ( DLpsd20 == 152162 ) {
		$(this).parent().css("border","")
	}else{
		$(".hint2").css("display","block");
		$("#hint2").html("输入手机验证码有误")
	}
})
$(".reset").click(function(){
	$("#DLpsd").val("")
})
//点击出现手机验证码
//$(".dianhua_p").click(function(){
//	$(".dianhua").animate({"top":"-500px"},2000,function(){})
//})








