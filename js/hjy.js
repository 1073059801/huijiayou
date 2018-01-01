//点击条状登录页面


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
//轮播图
//引入facade
$("#facade_wrap").load("fenlei/facade.html .facade",function(){
	var timer = setInterval(anima,1500);
    var $btnlist = $(".btn li");
    var $lbtlist = $(".lbt img");
    var index = 0;
    //点击下标
    $btnlist.click(function(){
	 	index = $(this).index()-1;
	 	clearInterval(timer);
	 	anima();
	})
    function anima(){
    	index ++;
    	if( index == $btnlist.size() ){
    		index = 0;
    	}
    	$btnlist.eq(index).addClass("current").siblings().removeClass("current");
    	//当前index对应的li的透明度调整为1   fadeIn()   其余的li的透明度0   隐藏   fadeOut()
    	$lbtlist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
    } 
    //点击左右 加号
    $("#right").click(function(){
    	index--;
		if (index == 2) {
			index = 0;
			return;
		}
		index++;
    	anima();
    })
    $("#left").click(function(){
    	index--;
		if ( index == -1 ) {
			index = 3;
			return;
		}
		index--;
    		anima();
    })
   //移入 移出
    $(".lunbotu").mouseenter(function(){
    	clearInterval(timer)
    })
    $(".lunbotu").mouseleave(function(){
    	timer = setInterval(anima,1000);
    })
    $("#facadebtn").click(function(){
		location.href = "HJYDL.html";
	})	
});

//限时秒杀
$("#xianshimiaosha").load("fenlei/xsms.html .timelimit",function(){
	//倒计时
	function timeDiff(start,end){
       return Math.abs( start.getTime() - end.getTime() );
    }
	function showTime(){
		var endTime = new Date("2017-12-12 00:00:00");//下架时间 
		var now = new Date();//当前时间
		//获取两个时间段的时间差
		var t = timeDiff(endTime,now)/1000; 
		
		var h = parseInt( t/3600 );
		var m = parseInt( (t - h*3600)/60 );
		var s = parseInt( t - h*3600 - m * 60 );
		
		$("#shi").html(h);
		$("#fen").html(m);
		$("#miao").html(s);
		t--;
	}
	//页面加载调用函数显示时间
	showTime();
	//启动定时器 
	var timer = setInterval( countDown , 1000 );
	function countDown(){
		showTime();
	}
	//引入json 限时秒杀
	var deff = $.ajax({
		type:"get",
		url:"js/mssp.json",
	});
	deff.done(function(json){
		var sp = json.sp;
		var html = "";
		for ( var i = 0 ; i < sp.length ; i++ ) {
			html += `<div onclick="window.open('HJYXQ.html','_self')" class="time_qgt">
						<div class="qgt">
							<img src="img/${sp[i].src}"/>
							<div class="zhe">
								${sp[i].zhe}
							</div>
						</div>
						<div class="xiangqing">
							<p class="p">${sp[i].jieshao}</p>
							<p class="p_2">${sp[i].jiage}<span>${sp[i].yuanjia}</span></p>
							<div class="liji">
								立即抢购
							</div>
						</div>
					</div>`
		}
		$(".time_2").html(html);
	});
	//点击左右
	var num = 0;
		$(".timelimit #left").click(function(){
			
			var boxW = Math.ceil(4080/$(".timelimit .time_2").width())
			if ( num == 0 ) {
			
				return
			}
			num--;
			$(".timelimit .time_2").animate({"left":-1200*num},1000)
		})
		$(".timelimit #right").click(function(){
			var boxW = Math.ceil(3600/$(".time_2").width())
			if ( num == boxW-1 ) {
				num = boxW -1;
				return
			}
			num++
			$(".timelimit .time_2").animate({"left":-1200*num},1000)
		})
})

//一楼
$("#oneF_wrap").load("fenlei/louceng.html .oneF",function(){
	var timer = setInterval(anima,1500);
    var $btnlist = $(".btn1 li");
    var $lbtlist = $(".lbt1 img");
    var index = 0;
    //点击下标
    $btnlist.click(function(){
	 	index = $(this).index()-1;
	 	clearInterval(timer);
	 	anima();
	})
    function anima(){
    	index ++;
    	if( index == $btnlist.size() ){
    		index = 0;
    	}
    	$btnlist.eq(index).addClass("current").siblings().removeClass("current");
    	//当前index对应的li的透明度调整为1   fadeIn()   其余的li的透明度0   隐藏   fadeOut()
    	$lbtlist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
    } 
    //点击左右 加号
    $(".oneF #right").click(function(){
    	index--;
		if (index == 3) {
			index = 0;
			return;
		}
		index++;
    	anima();
    })
    $(".oneF #left").click(function(){
    	index--;
		if ( index == -1 ) {
			index = 4;
			return;
		}
		index--;
    		anima();
    })
   //移入 移出
    $(".lunbotu1").mouseenter(function(){
    	clearInterval(timer)
    })
    $(".lunbotu1").mouseleave(function(){
    	timer = setInterval(anima,1000);
    })
})
//2楼
$("#twoF_wrap").load("fenlei/louceng.html #twoF",function(){
	var timer = setInterval(anima,1500);
    var $btnlist = $(".btn12 li");
    var $lbtlist = $(".lbt12 img");
    var index = 0;
    //点击下标
    $btnlist.click(function(){
	 	index = $(this).index()-1;
	 	clearInterval(timer);
	 	anima();
	})
    function anima(){
    	index ++;
    	if( index == $btnlist.size() ){
    		index = 0;
    	}
    	$btnlist.eq(index).addClass("current").siblings().removeClass("current");
    	//当前index对应的li的透明度调整为1   fadeIn()   其余的li的透明度0   隐藏   fadeOut()
    	$lbtlist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
    } 
    //点击左右 加号
    $("#twoF #right").click(function(){
    	index--;
		if (index == 3) {
			index = 0;
			return;
		}
		index++;
    	anima();
    })
    $("#twoF #left").click(function(){
    	
    	index--;
		if ( index == -1 ) {
			index = 4;
			return;
		}
		index--;
    		anima();
    })
   //移入 移出
    $(".lunbotu12").mouseenter(function(){
    	clearInterval(timer)
    })
    $(".lunbotu12").mouseleave(function(){
    	timer = setInterval(anima,1000);
    })
})
//3楼
$("#threeF_wrap").load("fenlei/louceng.html #threeF",function(){
	var timer = setInterval(anima,1500);
    var $btnlist = $(".btn13 li");
    var $lbtlist = $(".lbt13 img");
    var index = 0;
    //点击下标
    $btnlist.click(function(){
	 	index = $(this).index()-1;
	 	clearInterval(timer);
	 	anima();
	})
    function anima(){
    	index ++;
    	if( index == $btnlist.size() ){
    		index = 0;
    	}
    	$btnlist.eq(index).addClass("current").siblings().removeClass("current");
    	//当前index对应的li的透明度调整为1   fadeIn()   其余的li的透明度0   隐藏   fadeOut()
    	$lbtlist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
    } 
    //点击左右 加号
    $("#threeF #right").click(function(){
    	index--;
		if (index == 3) {
			index = 0;
			return;
		}
		index++;
    	anima();
    })
    $("#threeF #left").click(function(){
    	index--;
		if ( index == -1 ) {
			index = 4;
			return;
		}
		index--;
    		anima();
    })
   //移入 移出
    $(".lunbotu13").mouseenter(function(){
    	clearInterval(timer)
    })
    $(".lunbotu13").mouseleave(function(){
    	timer = setInterval(anima,1000);
    })
})	
//4F
$("#fourF_wrap").load("fenlei/louceng.html #fourF",function(){
	var timer = setInterval(anima,1500);
    var $btnlist = $(".btn14 li");
    var $lbtlist = $(".lbt14 img");
    var index = 0;
    //点击下标
    $btnlist.click(function(){
	 	index = $(this).index()-1;
	 	clearInterval(timer);
	 	anima();
	})
    function anima(){
    	index ++;
    	if( index == $btnlist.size() ){
    		index = 0;
    	}
    	$btnlist.eq(index).addClass("current").siblings().removeClass("current");
    	//当前index对应的li的透明度调整为1   fadeIn()   其余的li的透明度0   隐藏   fadeOut()
    	$lbtlist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
    } 
    //点击左右 加号
    $("#fourF #right").click(function(){
    	index--;
		if (index == 3) {
			index = 0;
			return;
		}
		index++;
    	anima();
    })
    $("#fourF #left").click(function(){
    	index--;
		if ( index == -1 ) {
			index = 4;
			return;
		}
		index--;
    		anima();
    })
   //移入 移出
    $(".lunbotu14").mouseenter(function(){
    	clearInterval(timer)
    })
    $(".lunbotu14").mouseleave(function(){
    	timer = setInterval(anima,1000);
    })
})
	
//5F
$("#fiveF_wrap").load("fenlei/louceng.html #fiveF",function(){
	var timer = setInterval(anima,1500);
    var $btnlist = $(".btn15 li");
    var $lbtlist = $(".lbt15 img");
    var index = 0;
    //点击下标
    $btnlist.click(function(){
	 	index = $(this).index()-1;
	 	clearInterval(timer);
	 	anima();
	})
    function anima(){
    	index ++;
    	if( index == $btnlist.size() ){
    		index = 0;
    	}
    	$btnlist.eq(index).addClass("current").siblings().removeClass("current");
    	//当前index对应的li的透明度调整为1   fadeIn()   其余的li的透明度0   隐藏   fadeOut()
    	$lbtlist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
    } 
    //点击左右 加号
    $("#fiveF #right").click(function(){
    	index--;
		if (index == 3) {
			index = 0;
			return;
		}
		index++;
    	anima();
    })
    $("#fiveF #left").click(function(){
    	index--;
		if ( index == -1 ) {
			index = 4;
			return;
		}
		index--;
    	anima();
    })
   //移入 移出
    $(".lunbotu15").mouseenter(function(){
    	clearInterval(timer)
    })
    $(".lunbotu15").mouseleave(function(){
    	timer = setInterval(anima,1000);
    })
})
//猜你喜欢
//#cnlike .time_ .time_2 .time_qgt
$("#cnlike_wrap").load("fenlei/xsms.html #cnlike",function(){
	//引入json 猜你喜欢
	var deff2 = $.ajax({
		type:"get",
		url:"js/cnlike.json",
	});
	deff2.done(function(json){
		var like = json.like;
		var html = "";
		for ( var i = 0 ; i < like.length ; i++ ) {
			html += `<div onclick="window.open('HJYXQ.html','_self')" class="time_qgt">
						<div class="qgt">
							<img src="img/${like[i].src}"/>
							<div class="zhe">
								${like[i].zhe}
							</div>
						</div>
						<div class="xiangqing">
							<p class="p">${like[i].jieshao}</p>
							<p class="p_2">${like[i].jiage}<span>${like[i].yuanjia}</span></p>
						</div>
					</div>`
		}
		$("#cnlike .time_2").html(html);
	});
	
	//点击左右
	var num = 0;
		$("#cnlike #left").click(function(){
			var boxW = Math.ceil(4800/$("#cnlike .time_2").width)
			console.log(boxW)
			if ( num == 0 ) {
				
				return
			}
			num--;
			$("#cnlike .time_2").animate({"left":-1200*num},1000)
		})
		$("#cnlike #right").click(function(){
			var boxW = Math.ceil(4800/$("#cnlike .time_2").width())
			if ( num == boxW-1 ) {
				num = boxW -1;
				return
			}
			num++
			$("#cnlike .time_2").animate({"left":-1200*num},1000)
		})
})
    //楼梯效果
    //点击右侧楼层号 控制对应的楼层显示
    var flag = true;
    $("#louF ul").on("click","li",function(){
    	flag = false;
    	$(this).addClass("louFliclass")
    			.siblings()
    			.removeClass("louFliclass");
    	//获取每一个楼层相对于文档的top值
    	var _top = $(".Louti").eq( $(this).index() ).offset().top;
    	$("body,html").animate({ "scrollTop" : _top },1000,function(){
			//运动结束后  将开关变量值改为 true   手动触发滚动条 可以执行代码
			flag = true;
		});
    })
$(window).scroll(function(){
    $(".Louti").each(function(i){
		var a = Math.abs($(".Louti").eq(i).offset().top - $(window).scrollTop());
		var b = $(".Louti").eq(i).height()/2;
		//console.log($(window).scrollTop())
			//console.log(a)
		if( a < b){		
			console.log(i)
			$("#louF ul li").eq(i)
						.addClass("louFliclass")
						.siblings()
						.removeClass("louFliclass")
//			$("#louF ul li").eq(i) .css("background","red")
		}
	})
})
    
  
    
    //触发滚动条 控制楼层号
//  $(window).scroll(function(){
//  	if ( flag ) {
//  		var sTop = $(window).scrollTop();
//  		$floor = $(".Louti").filter(function(){
//				return  Math.abs( $(this).offset().top  - sTop) < $(this).height()/2;
//			})
// 			console.log( $floor.index() );
//  		var index = $floor.index();
//  		if( index != -1 ){//控制最后一个li （服务）的样式
//				//根据楼层的下标控制 楼层号的样式
//				$("#louF ul li").eq(index)
//								.addClass("louFliclass")
//								.siblings()
//								.removeClass("louFliclass");
//			}
//  	}
//  })
//  
    

    
    
    
    
    
    
    
    
    
    
    
    
    


