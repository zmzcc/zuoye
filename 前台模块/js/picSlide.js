var sign=0;
var change = function(){
	sign++;
	showPic(sign%3+1);
}
var showPic =function(index){
	var title=document.title;
	var ImgSrc;
	if(title=='时尚广场'){
		ImgSrc="images3/index/pic"+index+".jpg";
	}
	else if(title=='美食广场'){
		ImgSrc="images2/f"+index+".jpg";
	}
	document.getElementById('focusImg').src=
	ImgSrc;
	var lis=document.getElementsByClassName('focusBox')[0].getElementsByTagName('li');
	for (var i = lis.length - 1; i >= 0; i--) {
		lis[i].className="";
	}
	lis[index-1].className="current";
}
$(function(){
	window.setInterval("change()",1000);
})