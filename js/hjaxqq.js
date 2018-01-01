//鼠标操作小图  记录当前操作的小图下标  
$(".show_ul").on("click","li",function(){
	var png_mask = document.getElementsByClassName("png_mask")[0];
	var index = $(this).index();
	$(".png img").eq(index).show().siblings("img").hide();
	$(".show_center img").eq(index).show().siblings().hide();
	
	/*png_mask.style.backgroundImage="url(../img/spxq ("+ index++ +").jpg)";
	$(".png_mask").css("background","url(../img/spxq ("+ index++ +").jpg)");
	console.log("url(../img/spxq ("+ index++ +").jpg)"	)*/
}) 

//鼠标移入到小图上 显示遮罩层和大图显示区
$(".png").mouseover(function(){
 		$(".png_mask").show();
 		$(".show_center").show();
 	})
$(".png").mouseout(function(){
	$(".png_mask").hide();
	$(".show_center").hide();
})
//跟随效果
$(".png").mousemove(function(e){
	var e = e || event;
	var x = e.pageX - $(".png_mask").width()/2 - $(".png_").offset().left;
 	var y = e.pageY - $(".png_mask").height()/2 - $(".png_").offset().top;
	var maxL = $(".png_").width() - $(".png_mask").width();
	var maxT = $(".png_").height() - $(".png_mask").height();
	x = Math.min( maxL, Math.max(0,x) );
	y = Math.min( maxT, Math.max(0,y) );
	$(".png_mask").css({
		"left" : x,
		"top" :y
	})
	//大图x和y
	//比例关系 ： 大图/小图 = bigx/x = 大图显示区/小图显示区
	var bigImgx = x * $(".center_img").width()/$("#mm").width();
	var bigImgy = y * $(".center_img").height()/$("#mm").height();
	$(".center_img").css({
		"left" : -bigImgx,
		"top" :  -bigImgy
	})
	var png_mask = document.getElementsByClassName("png_mask")[0];
		png_mask.style.left = x + "px";
		png_mask.style.top = y + "px";
		//改变mask的背景位置
		png_mask.style.backgroundPositionX = -x + "px";
		png_mask.style.backgroundPositionY = -y + "px";
})

//$(".ul_li1").abbClass("liclass");
$(".content_bottom ul").on("click","li",function(){
	$(this).addClass("liclass").siblings().removeClass("liclass");
})
$(".ul_li1").click(function(){
	$(".bd_img").css("display","block");
	$(".bd_cs").css("display","none");
})
$(".ul_li2").click(function(){
	$(".bd_img").css("display","none");
	$(".bd_cs").css("display","block");
})

//加减
$("#a_jian").click(function(){
	var o = $("#txt").val();
	$("#txt").val(--o);
})
$("#a_jia").click(function(){
	var o = $("#txt").val();
	$("#txt").val(++o);
})





