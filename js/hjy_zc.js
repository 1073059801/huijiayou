
//通过load 方法请求 页面的头部信息
$("#head_wrap_zc").load("fenlei/head.html .hhdd_zc",function(){
	//seeknav  传送 字
	$(".seeknav").on("click","a",function(){
		$("#seek").val($(this).html());
	})
	//滑入 全部商品分类
	$(".fenlei").mouseenter(function(){
		$(this).find(".fenleiwaibu").css("display","block")
	})
	/*$(".fenlei").mouseleave(function(){
		$(this).find(".fenleiwaibu").css("display","none")
	})*/
	$(".fenleiwaibu i").on({
		"mouseenter" : function(){
			$(this).css({"background":"#dc0f50"})
			$(this).find("a").css("color","#fff")
		},
		"mouseleave" : function(){
			$(this).css({"background":""})
			$(this).find("a").css("color","")
		}
	})
});
var flag=[false,false,false,false,false];
//表单验证
$(".zcul").on("focus","input",function(){
	$(this).css("border","1px solid red")
})
//验证手机号
$("#shoujihao").keyup(function(){
	var v = $(this).val();
	$("#shoujihao").val(  v.substr(0,11) );//截取前11个字符
})
$("#shoujihao").blur(function(){
	var oSJH = $(this).val();
	var reg=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	if(reg.test(oSJH)){
		$(".shouji .b").css("display","inline-block");
		$(this).next("span").css("display","none")
		$(this).css("border","")
		flag[0]=true;
	}else{
		$(".jpg .b").css("display","none");
		$(this).next("span").css("display","inline");
		flag[0]=false;
	}
})
//验证图片验证码
function getRandom(n){//随机4位数字
	var sNum="";
	for(var i=0;i<n;i++){
		var num=Math.floor(Math.random()*10);
		sNum+=num;
	}
	$(".sjyzm").html(sNum);
//	oRandom.innerHTML=sNum;	
}
$(window).load(function(){
	getRandom(4);
})
$(".sjyzm").click(function(){
	getRandom(4);
	
	$(this).animate({"background-position-y":"0px"},1000,function(){
		$(this).animate({"background-position-y":"80px"},1000,function(){})
	})
})
$("#yzm").blur(function(){
	var oJPG = $(this).val();
	var oYZM = $(".sjyzm").html();
	if( oJPG == oYZM ){
		$(".jpg .b").css("display","inline-block");
		$(".sjyzm").next("span").css("display","none")
		$(this).css("border","")
		flag[1]=true;
	}else{
		$(".jpg .b").css("display","none");
		$(".sjyzm").next("span").css("display","inline");
		flag[1]=false;
	}
})
$("#pswod").keyup(function(){
	var v = $(this).val();
	$("#pswod").val(  v.substr(0,13) );//截取前13个字符
//	$(this).next("span").css("display","inline");
})
//设置密码
$("#pswod").blur(function(){
	var oPSD = $(this).val();
	var reg=/^[^\s]{6,16}$/;
	if( reg.test(oPSD) ){
		$(".pswod .b").css("display","inline-block");
		$(this).next("span").css("display","none")
		$(this).css("border","")
		flag[2]=true;
	}else{
		$(".pswod .b").css("display","none");
		$(this).next("span").css("display","inline");
		flag[2]=false;
	}
})
$("#pswodto").blur(function(){
	var oPSDto = $(this).val();
	var oPSD = $("#pswod").val();
	if(  oPSD == oPSDto ){
		$(".pswodto .b").css("display","inline-block");
		$(this).next("span").css("display","none")
		$(this).css("border","")
		flag[3]=true;
	}else{
		$(".pswodto .b").css("display","none");
		$(this).next("span").css("display","inline");
		flag[3]=false;
	}
})
//获取手机验证码
$(".dtyzm").blur(function(){
	var odtYZM = $(this).val();
	var oSJYZM = $(".hqyzm").html();
	if(  odtYZM == 152162 ){
		$(".dtyzm .b").css("display","inline-block");
		$(".hqyzm").next("span").css("display","none")
		$(this).css("border","")
		flag[4]=true;
	}else{
		$(".dtyzm .b").css("display","none");
		$(".hqyzm").next("span").css("display","inline");
		flag[4]=false;
	}
})
//点击出现手机验证码
$(".dianhua_p").click(function(){
	$(".dianhua").animate({"top":"-500px"},2000,function(){})
})
$(".hqyzm").click(function(){
	$(".dianhua").animate({"top":0},2000,function(){
})
	$(this).css("background","#999");
	$("<span id='djs'>(60s)</span>").insertAfter($(".spyzm"));
	var timer = setInterval(fun,1000);
	var i = 60;
	function fun(){
		$("#djs").html("("+ --i +"s)");
		if( i <= 0 ){
			i = 0;
			clearInterval( timer );
			$("#djs").css("display","none")
			$(".hqyzm").css("background","#dc0f50")
		}
	}
})
var flag2 = 0;
$("#checkbox").click(function(){
	if ( flag2 ) {
		$(".on").css("background","#999");
		return flag2 = 0;
		flag[5]=true;
	}else{
		$(".on").css("background","#dc0f50");
		return flag2 = 1;
		flag[5]=false;
	}
})
//存cookie
$(".on").click(function(evt){
	var iii=false
	for(var i=0;i<flag.length;i++){
		console.log(flag[i])
		if(!flag[i]){
			console.log(flag[i])
			alert("请仔细检查");
			iii=true;
		}
	}
	if(iii){
		return;
	}else{
		alert("通过")
		var _json = {
			"uname" : $("#shoujihao").val(),
			"upwd" : $("#pswodto").val()
		}
		setCookie("cookie",JSON.stringify(_json),2);
		location.href = "HJYDL.html";//页面跳转
	}
})







