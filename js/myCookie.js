//设置cookie
function setCookie(key,value,day){
    if(day){
        var d = new Date();
        d.setDate( d.getDate() + day )
        document.cookie = key+"="+value+";expires="+d;
    }else{
        document.cookie = key+"="+value
    }   
}
//删除cookie
function removeCookie(key){
	setCookie(key,"");
}
//获取cookie
function getCookie(key){
	//uname=lichune; upwd=lichuen; addr=999; sex=girl
	if( document.cookie ){//如果cookie中有数据，才可以取数据
		var str = document.cookie
		var arr = str.split("; ");
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == key ){
				return JSON.parse( item[1] );//将结果直接转成对象输出
			}
		}
		return [];//如果循环结束后，没有满足条件的key ， 就直接返回一个空数组
	}
	//如果没有cookie 也需要返回一个空数组
	return [];
}
