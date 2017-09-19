function getClass(classname ){

	if(document.getElementsByClassName){
		return document.getElementsByClassName(classname);
	}else{
		var newarr=[];
		var all=document.getElementsByTagName('*');
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,classname)){
				newarr.push(all[i]);
			}
		}
		return newarr;
	}
}



function checkClass(className,classname){
	var newarr1=className.split(' ');
	for(var i=0;i<className.length;i++){
       if(newarr1[i]==classname){
       	return true;
       }
	}
	return false;
}

     /*获取指定元素   select 字符串 选择器*/

     function $(select,range){
       var first=select.charAt(0);
       if(first=='.'){
         return getClass(select.substring(1),range);
       }else if(first=='#'){
          return document.getElementById(select.substring(1),range);
       }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
       	return range.getElementsByTagName(select);
       }
     }