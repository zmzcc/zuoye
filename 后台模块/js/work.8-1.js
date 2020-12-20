var data=[
[{"cityname":"济南市","area":["市中区","历下区","天桥区","槐荫区"]},
{"cityname":"青岛市","area":["市南区","市北区","四方区","李沧区"]}],
[{"cityname":"石家庄市","area":["桥西区","新华区","长安区","裕华区"]},
{"cityname":"廊坊市","area":["安次区","广阳区","三河市","霸州市"]},
{"cityname":"秦皇岛市","area":["市辖区","海港区","山海关区","北戴河区"]}],
[{"cityname":"南京市","area":["市瞎区","玄武区","秦淮区","建邺区"]},
{"cityname":"无锡市","area":["市辖区","锡山区","惠山区:","滨湖区"]}]
];
for(var i=0;i<data.length;i++){
	console.log(data[i]);
}
$(function(){
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
})

