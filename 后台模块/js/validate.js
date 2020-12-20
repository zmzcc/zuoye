var data=[
[{"cityname":"济南市","area":["市中区","历下区","天桥区","槐荫区"]},
{"cityname":"青岛市","area":["市南区","市北区","四方区","李沧区"]}],
[{"cityname":"石家庄市","area":["桥西区","新华区","长安区","裕华区"]},
{"cityname":"廊坊市","area":["安次区","广阳区","三河市","霸州市"]},
{"cityname":"秦皇岛市","area":["市辖区","海港区","山海关区","北戴河区"]}],
[{"cityname":"南京市","area":["市瞎区","玄武区","秦淮区","建邺区"]},
{"cityname":"无锡市","area":["市辖区","锡山区","惠山区:","滨湖区"]}]
];
function onFoucs(){
	this.select();
	this.style.backgroundColor="#FFEC8B";
	this.style.color="#000000";
}
function onBlur(){
	this.style.backgroundColor="#FFFFFF";
	this.style.color="#000000";
}
function checkUserName(){
	var userName=document.getElementById("userName");
	if(userName.value==""||userName.value=="请输入用户名")	{
		alert("用户名不能为空");
		userName.focus();
		return false;
	}
	return true;
}
function checkPassword(){
	var userPwd=document.getElementById("userPwd").value;
	var userRePwd=document.getElementById("userRePwd").value;
	if(userPwd==""||userRePwd==""){
		alert("密码不能为空！");
		return false;
	}else if(userPwd.length<6||userPwd.length>20){
		alert("密码长度为6~20位，请进行确认！");
		return false;
	}else if(userPwd!=userRePwd){
		alert("新密码和确认密码不一致！");
		return false;
	}
	if(/\d/.test(userPwd)&&/[a-z]/i.test(userPwd)||
		/\d/.test(userPwd)&&/[\@\#\$\%\&\*]/.test(userPwd)||
		/[\@\#\$\%\&\*]/.test(userPwd)&&/[a-z]/i.test(userPwd)){
		return true;	
	}else{
		alert("密码必须是由字母、数字和符号的两种以上组合!");
		return false;	
	}
	return false;	
}
window.onload = function () {
	var prov=document.getElementById('prov');
    var city=document.getElementById('city');
	var area=document.getElementById('area');

	prov.onchange = function(){
		city.options.length=1;
		for(var i=0;i<=data[prov.selectedIndex-1].length-1;i++){
			var cityname = data[prov.selectedIndex-1][i].cityname;
			city.options.add(new Option(cityname,cityname));
		}
    }

    city.onchange = function(){
		area.options.length=1;
		var p=prov.selectedIndex;
		var c=city.selectedIndex;
		for(var i=0;i<=data[p-1][c-1].area.length-1;i++){
			var areaname = data[p-1][c-1].area[i];
			area.options.add(new Option(areaname,areaname));
		}
    }
	$('form').submit(function(){
		return checkUserName()&&checkPassword();
	});
	$('input[type="text"]').focus(onFoucs);
	$('input[type="passward"]').focus(onFoucs);
	$('input[type="text"]').blur(onBlur);
	$('input[type="passward"]').blur(onBlur);
};
