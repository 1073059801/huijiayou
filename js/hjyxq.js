//点击box
var flag = true;
$(".BOX_top #span").click(function(){
	if ( flag ) {
		$(".BOX_top").animate({"height":"116px"},1000,function(){});
		$(".BOX_top").find("dd").animate({"height":"116px"},1000,function(){});
		$(this).find("i").html("收起");
		flag = false;
	}else{
		$(".BOX_top").animate({"height":"58px"},1000,function(){});
		$(".BOX_top").find("dd").animate({"height":"58px"},1000,function(){});
		$(this).find("i").html("更多");
		flag = true;
	}
	
})
var flag = 1;
$(".buttom #span").click(function(){
	if ( flag ) {
		$(".buttom").animate({"height":"116px"},1000,function(){});
		$(".buttom").find("dd").animate({"height":"116px"},1000,function(){});
		$(this).find("i").html("收起");
		flag = 0;
	}else{
		$(".buttom").animate({"height":"58px"},1000,function(){});
		$(".buttom").find("dd").animate({"height":"58px"},1000,function(){});
		$(this).find("i").html("更多");
		flag = 1;
	}
})
$(".moods ul li:first").addClass("liclass")
$(".moods ul").on("click",".li",function(){
	$(this).addClass("liclass")
		   .siblings()
		   .removeClass("liclass")
	$(".b1").click(function(){
		
	})
	$(".b2").click(function(){
		
	})
})
/**************************最大最小价格*****************************/
$(".inp").on("focus","input",function(){
	$(this).css("border","1px solid #DC0F50")
})
$(".inp").on("blur","input",function(){
	
	$(this).css("border","1px solid #999")
})
$(".btn").click(function(){
	var big = $(".big").val();
	var small = $(".small").val();
	var reg=/^\d$/;
	if ( reg.test(big) && reg.test(small) ) {
		alert("ok")
	}else if( big == "" ){
		alert("填写最大值")
	}else if( small == "" ){
		alert("填写最小值")
	}else{
		alert("请填写数字")
	}
})
//引入json 
	/*var deff = $.ajax({
		type:"get",
		url:"js/commodity.json",
	});*/
	/*deff.done(function(json){
		var cd = json.commodity;
		var html = "";
		for ( var i = 0 ; i < cd.length ; i++ ) {
//			onclick="window.open('HJYXQQ.html','_self')"
			html += `<li>
						<img onclick="window.open('HJYXQQ.html','_self')" class="commodity_img" src="img/${cd[i].src}"/>
						<b id="commodity_b" class="commodity_b">加入购物车</b>
						<p class="commodity_p">￥${cd[i].introduce}</p>
						<p class="commodity_jg">￥<b>${cd[i].price}</b> <span>${cd[i].cost}</span></p>
						<font class="commodity_xs">月销售<span>${cd[i].yuex}</span>件</font>
					</li>`
		}
		$(".commodity").html(html);
		
		//点击加入购物车
		var index = 0;
		$(".commodity_b").click(function(){
			++index;
			var a = $(".commodity_p").html();
			var b = $(".commodity_jg b").html();
			//console.log(typeof($(".you_ul").append('<li class="you_li"><a href="#"><img src="img/cnlike (1).jpg"/><span>a</span></a><span>56×1<a href="#">删除</a></span></li>')))
			$(".you_ul").append('<li class="you_li"><a href="#"><img src="'+$(this).prev().attr("src")+'"/><span>'+a+'</span></a><span><b class="b_1">'+b+'</b>×<b class="b_2">1</b><a id="diss" href="#">删除</a></span></li>')
			$(".gwc>i").html(index);
			$(".accound_span1>i").html(index);
			var s = $(".b_1").html();
			var s1 = $(".b_2").html();
			var heji = s*s1*index;
			$(".accound_span2>i").html(heji);
			$("#diss").click(function(){
				$(this).parent().parent().remove();
				var s = $(".b_1").html();
				var s1 = $(".b_2").html();
				var s2 = $(this).prev().html();
				var s3 = $(this).prev().prev().html();
				$(".accound_span2>i").html(heji-s3*s2);
				var s4 = $(".gwc>i").html();
				$(".gwc>i").html( s4 - s2 );
				$(".accound_span1>i").html( s4 - s2 );
				//$(".b_1").html(  )
			})
		var li1 = document.getElementsByClassName("gwc");
		var ol1 = document.getElementsByClassName("gouwuche");
		var aside = document.getElementsByClassName("head_2");
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		var targetX = $(".gwc").offset().left;
		var targetY = $(".gwc").offset().top;
			
		$(this).parent().append("<div class='tmpImg'><img src='"+$(this).prev().attr("src")+"'/></div>")
//		var tmpImg = document.getElementsByClassName("tmpImg");
		console.log(targetY)
		
		$(".tmpImg").animate({"left":"500px","top":"-500px"},1000,function(){
			$(this).css("display","none")
		})
//		startMove(tmpImg,{
//			"left" : targetX,
//			"top" : targetY
//		}, function(){
//			//document.body.removeChild(tmpImg);
//			//showCart();	// 显示购物车中的所有的商品
//		});
		
		});
	});*/
//页面加载 请求ajax  显示第一页
	var deff = $.ajax({
		url:"js/commodity.json",
		type:"get"
	});
	deff.done(function(json){
		//显示第一页数据
		var cd = json.commodity;
		var html = "";
		var index = 1;
		for ( var i = (index-1)*20 ; i < index*20 ; i++ ) {
//			onclick="window.open('HJYXQQ.html','_self')"
			if ( i < cd.length ) {
				html += `<li>
							<img onclick="window.open('HJYXQQ.html','_self')" class="commodity_img" src="img/${cd[i].src}"/>
							<b id="commodity_b" class="commodity_b">加入购物车</b>
							<p class="commodity_p">￥${cd[i].introduce}</p>
							<p class="commodity_jg">￥<b>${cd[i].price}</b> <span>${cd[i].cost}</span></p>
							<font class="commodity_xs">月销售<span>${cd[i].yuex}</span>件</font>
						</li>`
			}
		}
		$(".commodity").html(html);
		//分页请求
		
		
		
		var index = 0;
		$(".commodity_b").click(function(){
			++index;
			var a = $(".commodity_p").html();
			var b = $(".commodity_jg b").html();
			//console.log(typeof($(".you_ul").append('<li class="you_li"><a href="#"><img src="img/cnlike (1).jpg"/><span>a</span></a><span>56×1<a href="#">删除</a></span></li>')))
			$(".you_ul").append('<li class="you_li"><a href="#"><img src="'+$(this).prev().attr("src")+'"/><span>'+a+'</span></a><span><b class="b_1">'+b+'</b>×<b class="b_2">1</b><a id="diss" href="#">删除</a></span></li>')
			$(".gwc>i").html(index);
			$(".accound_span1>i").html(index);
			var s = $(".b_1").html();
			var s1 = $(".b_2").html();
			var heji = s*s1*index;
			$(".accound_span2>i").html(heji);
			$("#diss").click(function(){
				$(this).parent().parent().remove();
				var s = $(".b_1").html();
				var s1 = $(".b_2").html();
				var s2 = $(this).prev().html();
				var s3 = $(this).prev().prev().html();
				$(".accound_span2>i").html(heji-s3*s2);
				var s4 = $(".gwc>i").html();
				$(".gwc>i").html( s4 - s2 );
				$(".accound_span1>i").html( s4 - s2 );
				//$(".b_1").html(  )
			})
		var li1 = document.getElementsByClassName("gwc");
		var ol1 = document.getElementsByClassName("gouwuche");
		var aside = document.getElementsByClassName("head_2");
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		var targetX = $(".gwc").offset().left;
		var targetY = $(".gwc").offset().top;
			
		$(this).parent().append("<div class='tmpImg'><img src='"+$(this).prev().attr("src")+"'/></div>")
//		var tmpImg = document.getElementsByClassName("tmpImg");
		console.log(targetY)
		
		$(".tmpImg").animate({"left":"500px","top":"-500px"},1000,function(){
			$(this).css("display","none")
		})
//		startMove(tmpImg,{
//			"left" : targetX,
//			"top" : targetY
//		}, function(){
//			//document.body.removeChild(tmpImg);
//			//showCart();	// 显示购物车中的所有的商品
//		});
		
		});
	})
	
$('.M-box3').pagination({
    pageCount:50,
    jump:true,
    coping:true,
    homePage:'首页',
    endPage:'末页',
    prevContent:'上页',
    nextContent:'下页',
    callback:function(api){
        var data = {
           	 page: api.getCurrent(),
        };
        $.getJSON('js/commodity.json',function(json){
           	var cd = json.commodity;
			var html = "";
			var index = data.page;
			for ( var i = (index-1)*20 ; i < index*20 ; i++ ) {
	//			onclick="window.open('HJYXQQ.html','_self')"
				if ( i < cd.length ) {
					html += `<li>
								<img onclick="window.open('HJYXQQ.html','_self')" class="commodity_img" src="img/${cd[i].src}"/>
								<b id="commodity_b" class="commodity_b">加入购物车</b>
								<p class="commodity_p">￥${cd[i].introduce}</p>
								<p class="commodity_jg">￥<b>${cd[i].price}</b> <span>${cd[i].cost}</span></p>
								<font class="commodity_xs">月销售<span>${cd[i].yuex}</span>件</font>
							</li>`
				}
			}
			$(".commodity").html(html);
        });
        
    }
});
//点击左右
var num = 0;
$("#left").click(function(){
	var boxW = Math.ceil(3600/$("#cnlike .time_2").width)
			console.log(boxW)
			if ( num == 0 ) {
				
				return
			}
			num--;
			$("#cnlike .time_2").animate({"left":-1200*num},1000)
})

$("#cnlike #right").click(function(){
		var boxW = Math.ceil(3600/$("#cnlike .time_2").width())
		if ( num == boxW-1 ) {
			num = boxW -1;
			return
		}
		num++
		$("#cnlike .time_2").animate({"left":-1200*num},1000)
})
/*$("#cnlike #right").click(function(){
	var $time_ = $(".time_"); 
	var imgList = $(".time_2");
	var i = 0;
	console.log(imgList)
	if( i == 3 ){
		i = 0;
		return;
	}
 		i ++;
 		startMove( $time_ , { "left" : -imgList[0].offsetWidth*i });
})*/





























//通过load 方法请求 页面的头部信息
$("#head_wrap").load("fenlei/head.html .hhdd",function(){
		//由于ajax是异步   要想为ajax请求的文件内容添加事件   事件必须写在回调函数中
		$(".head_1_1 p").hover(function(){
			$(this).css("color","#dc0f50")
		},function(){
			$(this).css("color","")
		})
		$(".head_1_2 p").hover(function(){
			$(this).css("color","#dc0f50")
		},function(){
			$(this).css("color","")
		})
		//手机版
		$(".head_1_3").mouseenter(function(){
			$(this).find("a").css("color","#dc0f50");
		//	$(this).find(".erweima11").show();/*css("opacity",1)*/
			$(this).find(".erweima11").css("display","block")
		})
		$(".head_1_3").mouseleave(function(){
			$(this).find("a").css("color","");
			$(this).find(".erweima11").css("display","none")
		})
		//微信版
		$(".head_1_4").mouseenter(function(){
			$(this).find("a").css("color","#dc0f50");
		//	$(this).find(".erweima11").show();/*css("opacity",1)*/
			$(this).find(".erweima22").css("display","block")
		})
		$(".head_1_4").mouseleave(function(){
			$(this).find("a").css("color","");
			$(this).find(".erweima22").css("display","none")
		})
	});
$("#head_wrap2").load("fenlei/head.html .hhdd2",function(){
	//seeknav  传送 字
	$(".seeknav").on("click","a",function(){
		$("#seek").val($(this).html());
	})
	//滑入 全部商品分类
	$(".fenlei").mouseenter(function(){
		$(".f").css("color","#333")
		$(this).find(".fenleiwaibu").css("display","block")
	})
	$(".fenlei").mouseleave(function(){
		$(".f").css("color","#fff")
		$(this).find(".fenleiwaibu").css("display","none")
	})
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
//引入底部
$("#footer_wrap").load("fenlei/footer.html .footer",function(){})
$("#footer_wrap2").load("fenlei/footer.html .fftt",function(){})
//固定定位
$("#right_fixed").load("fenlei/footer.html .right",function(){
	//手机
	$("#mobile").mouseenter(function(){
		$(this).css("background","#dc0f50")
		$(this).find(".right_ewm").css("display","block")
	})
	$("#mobile").mouseleave(function(){
		$(this).css("background","")
		$(this).find(".right_ewm").css("display","none")
	})
	//微信
	$("#weichat").mouseenter(function(){
		$(this).css("background","#18ea13")
		$(this).find(".right_ewm2").css("display","block")
	})
	$("#weichat").mouseleave(function(){
		$(this).css("background","")
		$(this).find(".right_ewm2").css("display","none")
	})
	//返回顶部
	$(window).scroll(function(){
 		var sTop = $(document).scrollTop();
 		if( sTop > 100 ){
 			$("#Topbtn").css("opacity",1);
 		}else{
 			$("#Topbtn").css("opacity",0);
 		}
 	})
	$("#Topbtn").click(function(){
		$("body,html").animate({ "scrollTop" : 0 },1000,function(){});
	})
})












































































