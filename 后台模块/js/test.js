var jsondata={
	data:[{href:"#",src:"s1.jpg",price:56.00},
	{href:"#",src:"s2.jpg",price:96.00},
    {href:"#",src:"s3.jpg",price:56.00},
   	{href:"#",src:"s4.jpg",price:55.00},
   	{href:"#",src:"s5.jpg",price:76.00},
   	{href:"#",src:"s6.jpg",price:73.00},
   	{href:"#",src:"s7.jpg",price:37.00},
   	{href:"#",src:"s8.jpg",price:58.00},
   	{href:"#",src:"s9.jpg",price:75.00},
   	{href:"#",src:"yifu1.jpg",price:57.00},
   	{href:"#",src:"yifu2.jpg",price:57.00},
   	{href:"#",src:"yifu3.jpg",price:78.00},
   	{href:"#",src:"yifu4.jpg",price:87.00},
	]
}
var arr = [];
var inner="";
var random=function(upper){
	return Math.floor(Math.random()*upper);
}

var check = function(num){
	for (var i = arr.length - 1; i >= 0; i--) {
		if(arr[i]==num){
			return false;
		}
	}
	return true;
}
do{
	var randomx = random(9);
    if(check(randomx)){
	    arr.push(randomx);
    }
}while(arr.length<9);
for (var i = arr.length - 1; i >= 0; i--) {
	var data1=jsondata.data[arr[i]];
	inner+='<li><a href="'+data1.href+'"><img src="images3/shopshow/'+data1.src+'" alt=""></a><p class="price2">￥'+data1.price+'元</p></li>'+"";
}
console.log(inner);
window.onload = function(){
	document.getElementsByClassName('pic_list3')[0].innerHTML =inner;
}
