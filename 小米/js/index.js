window.onload=function(){
	let images=$('.images');
	let dian3 =$('.dian3');
	let banner=$('.banner')[0];
	let bannerleft=$('.bannerleft');
	let items=$('.items');
	let banner3=$('.banner3')[0];
	let banner4=$('.banner4')[0];
	console.log(banner3)
	banner3.onclick=function(){
		movel()
	}
	banner4.onclick=function(){
		move()
	}
	function movel(){
		num--;
		if(num<0){
			num=images.length-1;
		}
		for(let i=0;i<images.length;i++){
			images[i].style.display='none';
			dian3[i].style.background='#58585c';

		}
		images[num].style.display='block';		
		dian3[num].style.background='#fff';
	}
	let t;
	let num=0;
	t=setInterval(move, 1000);
	
	function move(){
		num++;
		if(num==images.length){
			num=0;
		}
		for(let i=0;i<images.length;i++){
			images[i].style.display='none';
			dian3[i].style.background='#58585c';

		}
		images[num].style.display='block';		
		dian3[num].style.background='#fff';
	}
	for(let i=0;i<dian3.length;i++){
		dian3[i].onclick=function(){
			clearInterval(t);
			for(let i=0;i<5;i++){
			images[i].style.display='none';
			dian3[i].style.background='#58585c';
		}
		images[i].style.display='block';
		dian3[i].style.background='#fff';
		num=i;
		}
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t= setInterval(move,1000);
	}
	for(let i=0;i<bannerleft.length;i++){
		bannerleft[i].onmouseover=function(){
			items[i].style.display='block';
		}
		bannerleft[i].onmouseout=function(){
			items[i].style.display='none';
		}
	}

	// for(let i=0;i<list.length;i++){
	// 		list[i].onmouseover=function(){
	// 			item[i].style.display='block';
	// 		}
	// 		list[i].onmouseout=function(){
	// 			item[i].style.display='none';
	// 		}
	// 	}
}
