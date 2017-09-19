window.onload=function(){
	let images=$('.bannerimage');
	let bannerlast4 = $('.banner-last4')[0];
	let list = bannerlast4.getElementsByTagName('li');
	let bannerlast = $('.banner-last')[0];
	console.log(list)

	let num=0;
	let t
	t= setInterval(move,3000);
	function move(){
		num++;
		if(num==images.length){
			num=0;
		}
		for(let i=0;i<images.length;i++){
			images[i].style.display='none';
			list[i].style.background='#C5C5C5';
		}
		images[num].style.display='block';
		list[num].style.background='#fff';
	}
	for(let i=0;i<6;i++){
		list[i].onclick=function(){
			clearInterval(t);
			// 所有消失  当前对应的显示
			for(let i=0;i<6;i++){
				images[i].style.display='none';
				list[i].style.background='#fff';
			}
		images[i].style.display='block';
		list[i].style.background='#C5C5C5';
		num=i		
		}
	}
	bannerlast.onmouseover=function(){
		clearInterval(t);
	}
	bannerlast.onmouseout=function(){
		t= setInterval(move,3000);
	}

}
