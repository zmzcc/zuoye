function changeGoodsImage(thumb) {
    var showGoodsPicture = document.getElementById("showGoodsPicture");   
    showGoodsPicture.src = thumb.src;
    var goodsList = document.getElementById("goodsList");
	var items=goodsList.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
		var thumbImages=items[i].getElementsByTagName("img");
		thumbImages[0].style.borderColor = "";
    }
    thumb.style.borderColor = "red";
}
function changeGoodsInfo(obj){
	var currentSelect=0;
	var goodsTabs=document.getElementById("goodsTabs");
	var goodsTitles=goodsTabs.getElementsByTagName("li");
	for(var i=0;i<goodsTitles.length;i++){
		goodsTitles[i].className="";
		if(obj==goodsTitles[i]){
			currentSelect=i;
		}
	}
	obj.className="tab_active";
	var middleDiv=document.getElementsByClassName("middle");
	var tabCotents=middleDiv[0].getElementsByTagName("article");
	for(var j=0;j<tabCotents.length;j++){
		if(currentSelect==j){
			tabCotents[j].className="tab_content"+(j);
		}else{
			tabCotents[j].className="none tab_content"+(j);
		}
		console.log(tabCotents[j].className);
	}
}


function getTop(e){
	var offset=e.offsetTop;
	if (e.offsetParent!=null){
		offset+=getTop(e.offsetParent);
	}
	return offset;
}
function getLeft(e){
	var offset=e.offsetLeft;
	if(e.offsetParent!=null){
		offset+=getLeft(e.offsetParent);
	}
	return offset;
}
$(function(){
	var showGoodsPicture=document.getElementById("showGoodsPicture");
	var canvas=document.getElementById("canvas");
	var shade=document.getElementById("shade");
	$('#box').mousemove(function(ev){
		document.body.style.cursor="move";
		var box = document.getElementById("box");
		var shadeX, shadeY;
		var boxX=getLeft(box);
		var boxY=getTop(box);
		shadeX=ev.pageX-boxX-100;
		shadeY=ev.pageY-boxY-100;
		if(shadeX<0){
			shadeX=0;
		}
		else if(shadeX>200){
			shadeX=200;
		}
		if(shadeY<0){
			shadeY=0;
		}
		else if(shadeY>200){
			shadeY=200;
		}
		var context=canvas.getContext("2d");
		shade.style.display="block";
		shade.style.left=shadeX+"px";
		shade.style.top=shadeY+"px";
		canvas.style.display="inline";
		context.clearRect(0, 0, 400, 400);
		var image=new Image();
		image.src=showGoodsPicture.src;
		context.drawImage(image, (shade.offsetLeft) * 2, (shade.offsetTop) * 2, 
				400, 400, 0, 0, 400, 400);
	});
	$('#box').mouseleave(function(ev){
		shade.style.display="none";
		canvas.style.display="none";
		document.body.style.cursor="default";
	});
	var goodsList=document.getElementById("goodsList");
	var thumb_images=goodsList.getElementsByTagName("li")[0]
		.getElementsByTagName("img");
	changeGoodsImage(thumb_images[0]);
});
