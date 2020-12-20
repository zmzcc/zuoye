(function($,window,document,undefined){
	var defaults=[{
			"text":"男装",
			"value":"男装",
			"subType":[{"value":"西装","text":"西装"},
				{"value":"风衣","text":"风衣"},
				{"value":"夹克","text":"夹克"}]
		},{
			"text":"女装",
			"value":"女装",
			"subType":[{"value":"女士上衣","text":"女士上衣"},
				{"value":"女士裙装","text":"女士裙装"},
				{"value":"蕾丝外衣","text":"蕾丝外衣"}]
		},{
			"text": "童装",
			"value": "童装",
			"subType": [{"value":"卡通系列","text":"卡通系列"},
				{"value":"卡哇伊系列","text":"卡哇伊系列"},
				{"value":"运动系列","text":"运动系列"}]
		}];
	function CascadingMenu(element,options){
		this.$element=element;
		this.settings=$.extend(defaults,options);
		this.firstMenu=null;
		this.secondMenu=null;
	}
	CascadingMenu.prototype={
		initMenu:function(){
			this.initFirstMenu();
			this.bindSelectChangeEvent();
			return $(this.$element).append(this.firstMenu)
					.append(this.secondMenu);
		},
		initFirstMenu:function(){
			this.firstMenu=$("<select></select>");
			this.firstMenu.append($("<option value='请选择'>-请选择-</option>"))
			for(var i=0;i<this.settings.length;i++){
				var option=$("<option></option>");
				option.append(this.settings[i].text);
				option.val(this.settings[i].value);
				this.firstMenu.append(option);
			}
			return this.firstMenu;
		},
		bindSelectChangeEvent:function(){
			var that=this;
			that.secondMenu=$("<select></select>");
			that.secondMenu.append($("<option value='请选择'>-请选择-</option>"));
			that.firstMenu.on("change",function(){
				that.secondMenu.empty();
				that.secondMenu.append($("<option value='请选择'>-请选择-</option>"));
				var index=this.selectedIndex-1;
				var subType=that.settings[index].subType;
				for(var i=0;i<subType.length;i++){
					var option=$("<option></option>");
					option.append(subType[i].text);
					option.val(subType[i].value);
					that.secondMenu.append(option);
				}
			});
			return that.secondMenu;
		}
	};
	$.fn.cascadingMenuPlugins=function(opts){
		console.log(opts);
		var cascadingMenu=new CascadingMenu(this,opts);
		return cascadingMenu.initMenu();
	}
}(jQuery,window,document))
