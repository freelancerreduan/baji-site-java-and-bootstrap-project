var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,f,e){b!=Array.prototype&&b!=Object.prototype&&(b[f]=e.value)};
$jscomp.getGlobal=function(b){b=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,b];for(var f=0;f<b.length;++f){var e=b[f];if(e&&e.Math==Math)return e}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(b,f,e,k){if(f){e=$jscomp.global;b=b.split(".");for(k=0;k<b.length-1;k++){var m=b[k];m in e||(e[m]={});e=e[m]}b=b[b.length-1];k=e[b];f=f(k);f!=k&&null!=f&&$jscomp.defineProperty(e,b,{configurable:!0,writable:!0,value:f})}};$jscomp.polyfill("Array.prototype.includes",function(b){return b?b:function(b,e){var f=this;f instanceof String&&(f=String(f));var m=f.length;e=e||0;for(0>e&&(e=Math.max(e+m,0));e<m;e++){var n=f[e];if(n===b||Object.is(n,b))return!0}return!1}},"es7","es3");
SportLv2Banner=function(){const b=function(a,b,c){c=$.extend(!0,{cache:!1,contentType:"application/x-www-form-urlencoded",processData:!0,isMultiPartFormData:!1,async:!0},c);c.isMultiPartFormData&&(c.contentType=!1,c.processData=!1);$.ajax({type:"POST",url:a,data:b,cache:c.cache,contentType:c.contentType,processData:c.processData,async:c.async,success:function(a){c.success?c.success(a):c.failCallBack&&c.failCallBack(a)},complete:function(){c.nonblock||c.complete&&c.complete()},beforeSend:function(){c.beforeSend&&
c.beforeSend()},error:function(){c.error&&c.error()}})};let f=$("#lv2-menu-sport"),e=f&&f.attr("lang")?f.attr("lang").toLowerCase():void 0,k=f&&f.data("version")?f.data("version"):void 0,m=f&&e&&k,n=[4];const q=function(){if(0<n.length){let a={gameTypeGroup:n.join()};b("/guest/getWebsiteVendor?v="+Math.random(),a,{success:function(a){if(void 0!==a){let c=a.vendorList,b=!1;n.forEach(function(a,d){var g="";d=GameType.getInstanceOf(a);a=c[a];if(d===GameType.OTHERS)b=!0;else{if(d!==GameType.FH)if(0<a.length){if(m){d===
GameType.Sport&&"sg"===PageConfig.webSiteType&&a.sort(function(a,d){return a.vendorCode.charAt(0)>d.vendorCode.charAt(0)?1:a.vendorCode.charAt(0)===d.vendorCode.charAt(0)?0:-1});g=l.buildGameBox(d,a,b);if(d===GameType.Sport&&"be"===PageConfig.webSiteType){a=$(g);g=a.find(".sub-nav-track");var h=g.children();let d={exchange:0,sbobet:1,sportsbook:2,awcmbc:3,kabaddi:4,horsebook:5};h.sort(function(a,h){let g=$(a).find("a .item-box img").attr("src"),c=$(h).find("a .item-box img").attr("src");a=Object.keys(d).find(a=>
g.includes(a))||6;h=Object.keys(d).find(a=>c.includes(a))||6;return d[a]-d[h]});h.detach().appendTo(g);g=a[0].outerHTML}if(d===GameType.Sport&&("bj"===PageConfig.webSiteType||"jb"===PageConfig.webSiteType)){a=$(g);g=a.find(".sub-nav-track");h=g.children();let d;switch(PageConfig.currencyName){case "INR":d={exchange:0,awcmbc:1,"i-sports":2,horsebook:3,virtual:4,kabaddi:5,sbobet:6,greyhound:7,horseracing:8};break;case "PKR":d={exchange:0,horsebook:1,"i-sports":2,virtual:3,kabaddi:4,sbobet:5,greyhound:6,
horseracing:7};break;default:d={exchange:0,awcmbc:1,"i-sports":2,virtual:3,horsebook:4,kabaddi:5,sbobet:6,greyhound:7,horseracing:8}}h.sort(function(a,h){let g=$(a).find("a .item-box img").attr("src"),c=$(h).find("a .item-box img").attr("src");a=Object.keys(d).find(a=>g.includes(a));h=Object.keys(d).find(a=>c.includes(a));return d[a]-d[h]});h.detach().appendTo(g);g=a[0].outerHTML}if(d===GameType.Sport&&"mcw"===PageConfig.webSiteType&&"USD"===PageConfig.currencyName){d=$(g);a=d.find(".sub-nav-track");
g=a.children();let h={sportsbook:0,sbobet:1,cockfight:2,unitedgaming:3,horsebook:4};g.sort(function(a,d){let g=$(a).find("a .item-box img").attr("src"),c=$(d).find("a .item-box img").attr("src");a=Object.keys(h).find(a=>g.includes(a))||6;d=Object.keys(h).find(a=>c.includes(a))||6;return h[a]-h[d]});g.detach().appendTo(a);g=d[0].outerHTML}}}else return;m&&f.append(`${g}`)}})}}})}},r=function(a){let b=a.vendorCode,c=a.sportGameList,e="";c&&0<c.length&&(e+=`
				${c.map(c=>{let d="";"1"===c.gameCode?d="soccer":"2"===c.gameCode?d="tennis":"4"===c.gameCode?d="cricket":"5"===c.gameCode?d="rugbyUnion":"7"===c.gameCode?d="horseRacing":"7522"===c.gameCode&&(d="basketball");return l.buildSportBox(a,c.gameCode,`${b}-${c.gameCode} ${d}`,c.gameName)}).join("")}`);return e},p=function(a){let b=a.vendorCode,c=a.isShowSportGame,e="";"CRICKET"===b?e=c?r(a):l.buildSportBox(a,void 0,"exchange",a.displayName):"Saba"===b?e=c?t(a):l.buildSportBox(a,"50","sportbook",a.displayName):
"AWCMSV388"===b?c&&(e=l.buildSportBox(a,"SV-LIVE-001","CockFight",a.displayName)):"UGv3"===b?e=l.buildSportBox(a,null,"unitedgaming",a.displayName):"AWCMHORSEBOOK"===b?e=l.buildSportBox(a,"HRB-LIVE-001","horsebook",a.displayName):"SBOv2"===b?e=l.buildSportBox(a,"SportsBook","sbobet",a.displayName):"ICF"===b?e=l.buildSportBox(a,"ICF-SPORT-001","icf",a.displayName):"AWCMBC"===b?e=l.buildSportBox(a,"BCSPORTS-SPORTS-001","awcmbc",a.displayName):"HORSEDOG"===b&&(e=u(a));return e},t=function(a){let b=a.sportGameList,
c="";b&&0<b.length&&(c+=`
				${b.map(c=>{let b;b=c.gameName.replace(" ","").toLowerCase();return l.buildSportBox(a,c.gameCode,b,c.gameName)}).join("")}`);return c},u=function(a){let b=a.sportGameList,c="";b&&0<b.length&&(c+=`
				${b.map(c=>{let b;b=c.gameName.replace(" ","").toLowerCase();return l.buildSportBox(a,c.gameCode,b,c.gameName)}).join("")}`);return c},l=function(){const a=function(a,c,b){return`
				<div class="sub-nav-inner">										
					${c.map(a=>p(a)).join("")}				
				
				</div>
			`},b=function(a,c,b){return`
				<div class="lv2-menu-inner sport col2-3">										
					${c.map(a=>p(a)).join("")}				
				
				</div>
			`},c=function(a,c,b){return`
				<ul class="lv2-menu-inner sport col2-3">							
					${c.map(a=>p(a)).join("")}
				${'\n\t\t\t<li class="promotion-text">\n\t\t\t\t<h3 class="title">Sports</h3>\n\t\t\t\t<p class="text">Max</p><img class="rebat" src="/images/web/nav/SPORTS/BANNER1.png" alt="sport">\n\t\t\t</li>\n\t\t'}
				</ul>
			`},f=function(a,c,b){return`
				<div class="sub-nav-inner">
					<button class="arrow-prev" disabled></button>
					<div class="sub-nav-draggable">
			  			<div class="sub-nav-track">
						${c.map(a=>p(a)).join("")}
						</div>
                	</div>
                	<button class="arrow-next"></button>
				</div>
			`},l=function(a,c,b){return`
				<div class="sub-nav-inner">
					<button class="arrow-prev" disabled></button>
					<div class="sub-nav-draggable">
			  			<div class="sub-nav-track">
						${c.map(a=>p(a)).join("")}
						${`			
			<div class="sub-nav-item maintenance">
					<p>${I18N.get("fe.text.go")}</p>
					<div class="maintenance-box">
						<img class="maintenance" src="/images/web/nav/SPORTS/maintenance.png">
					</div>					
				</div>
		`}
						</div>
                	</div>
                	<button class="arrow-next"></button>
				</div>
			`};return{buildGameBox:function(d,g,h){switch(k){case 1:case 4:return a(d,g,h);case 2:return b(d,g,h);case 3:return c(d,g,h);case 5:case 6:return f(d,g,h);case 7:return l(d,g,h);default:return""}},buildSportBox:function(a,c,b,f){switch(k){case 1:var d=a.vendorCode,g=a.vendorStatus;c=GameNavBannerCommonHandler.getVendorOpenGameUrl(d,GameType.Sport,c);a.vendorH5IconPath||GameType.Sport.getShortName().toLowerCase();a="/images/web/nav/SPORTS/"+b.toLowerCase()+"_"+e+"_01.png";var h="/images/web/nav/SPORTS/"+
b.toLowerCase()+"_"+e+"_02.png";b="/images/web/nav/SPORTS/"+b.toLowerCase()+"_"+e+"_03.png";d+=" Betting";b=!0===g?`
				<div class="sub-nav-item normal-item">
					<a data-href=${c}>
						<div class="item-box">
							<img class="item-1st" src="${a}" alt='${d}' >
							<img class="item-2nd" src="${h}" alt='${d}'>
							<img class="item-3rd" src="${b}" alt='${d}'>	
						</div>
						<span>${f}</span>		
						<p>${I18N.get("fe.text.play_now")}</p>
					</a>
				</div>
				`:!1===g?`				
				<div class="sub-nav-item normal-item maintenance">
					<a data-href=${c}>
						<div class="item-box">
							<img class="item-1st" src="${a}" alt='${d}' >
							<img class="item-2nd" src="${h}" alt='${d}'>
							<img class="item-3rd" src="${b}" alt='${d}'>	
						</div>
						<span>${f}</span>		
						<p>${I18N.get("fe.text.play_now")}</p>
					</a>
					<div class="maintenance-box">
						<div class="maintenance-inner" style="transform: perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1); z-index: 1;">
							<div class="icon-maintenance"></div><img src="/images/site/icon-set/icon-maintenance.svg">
							<strong>UNDER</strong>
							<p>maintenance</p>
							</div>
						</div>
				</div>
				`:void 0;return b;case 2:case 3:return g=a.vendorCode,f=a.vendorStatus,c=GameNavBannerCommonHandler.getVendorOpenGameUrl(g,GameType.Sport,c),a.vendorH5IconPath||GameType.Sport.getShortName().toLowerCase(),a=b,"sportsbook"===b.toLowerCase()&&(a="book"),b="/images/web/nav/SPORTS/sport-"+a+"_"+e+".png",a="casino-sport-"+a,g+=" Betting",b=!0===f?`
				<li class="menu-item">
					<a class='${a}' data-href=${c}>
						<img src="${b}" alt='${g}' >
						<p>${I18N.get("fe.text.play_now")}</p>
					</a>
				</li>			
				`:!1===f?`				
				<li class="menu-item maintenance">
					<a class='${a}' data-href=${c}>
						<img src="${b}" alt='${g}' >
						<p>${I18N.get("fe.text.play_now")}</p>
					</a>
					<div class="maintenance-box">
						<div class="maintenance-inner" style="transform: perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1); z-index: 1;">
							<div class="icon-maintenance"></div><img src="/images/site/icon-set/icon-maintenance.svg">
							<strong>UNDER</strong>
							<p>maintenance</p>
							</div>
						</div>
				</li>
				`:void 0,b;case 4:return d=a.vendorCode,g=a.vendorStatus,c=GameNavBannerCommonHandler.getVendorOpenGameUrl(d,GameType.Sport,c),a.vendorH5IconPath||GameType.Sport.getShortName().toLowerCase(),a="/images/web/nav/SPORTS/"+b.toLowerCase()+"_"+e+"_01.png",h="/images/web/nav/SPORTS/"+b.toLowerCase()+"_"+e+"_02.png",b="/images/web/nav/SPORTS/"+b.toLowerCase()+"_"+e+"_03.png",d+=" Betting",b=!0===g?`
				<div class="sub-nav-item normal-item">
					<a data-href=${c}>
						<div class="item-box">
							<img class="item-1st" src="${a}" alt='${d}' >
							<img class="item-2nd" src="${h}" alt='${d}'>
							<img class="item-3rd" src="${b}" alt='${d}'>	
						</div>
						<span>${f}</span>		
						<div class="sub-nav-p"><p>${I18N.get("fe.text.play_now")}</p></div>							
					</a>
				</div>
				`:!1===g?`				
				<div class="sub-nav-item normal-item maintenance">
					<a data-href=${c}>
						<div class="item-box">
							<img class="item-1st" src="${a}" alt='${d}' >
							<img class="item-2nd" src="${h}" alt='${d}'>
							<img class="item-3rd" src="${b}" alt='${d}'>	
						</div>
						<span>${f}</span>	
						<div class="sub-nav-p"><p>${I18N.get("fe.text.play_now")}</p></div>												
					</a>
					<div class="maintenance-box">
						<div class="maintenance-inner" style="transform: perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1); z-index: 1;">
							<div class="icon-maintenance"></div><img src="/images/site/icon-set/icon-maintenance.svg">
							<strong>UNDER</strong>
							<p>maintenance</p>
							</div>
						</div>
				</div>
				`:void 0,b;case 5:return d=a.vendorCode,g=a.vendorStatus,c=GameNavBannerCommonHandler.getVendorOpenGameUrl(d,GameType.Sport,c),a.vendorH5IconPath||GameType.Sport.getShortName().toLowerCase(),a="/images/web/nav/subnav-slide/"+b.toLowerCase()+"_"+e+"_01.png",h="/images/web/nav/subnav-slide/"+b.toLowerCase()+"_"+e+"_02.png",b="/images/web/nav/subnav-slide/"+b.toLowerCase()+"_"+e+"_03.png",d+=" Betting",b=!0===g?`
				<div class="sub-nav-item">
					<span>${f}</span>
					<a data-href=${c}>
						<div class="item-box">
							<img class="item-1st" src="${a}" alt='${d}' >
							<img class="item-2nd" src="${h}" alt='${d}'>
							<img class="item-3rd" src="${b}" alt='${d}'>
						</div>
						<p>${I18N.get("fe.text.go")}</p>
					</a>
				</div>
				`:!1===g?`
				<div class="sub-nav-item maintenance">
					<span>${f}</span>	
					<a data-href=${c}>
						<div class="item-box">
							<img class="item-1st" src="${a}" alt='${d}'>
							<img class="item-2nd" src="${h}" alt='${d}'>
							<img class="item-3rd" src="${b}" alt='${d}'>
						</div>
						<p>${I18N.get("fe.text.go")}</p>
					</a>
					<div class="maintenance-box">
						<img src="/images/web/nav/SPORTS/maintenance.png">
						<h5>UNDER<br>MAINTENANCE</h5>
					</div>
				</div>
				`:void 0,b;case 6:return d=a.vendorCode,g=a.vendorStatus,c=GameNavBannerCommonHandler.getVendorOpenGameUrl(d,GameType.Sport,c),a.vendorH5IconPath||GameType.Sport.getShortName().toLowerCase(),a="/images/web/nav/subnav-slide/"+b+"_"+e+"_01.png",h="/images/web/nav/subnav-slide/"+b+"_"+e+"_02.png",b="/images/web/nav/subnav-slide/"+b+"_"+e+"_03.png",d+=" Betting",b=!0===g?`
				<div class="sub-nav-item">
					<span>${f}</span>
					<a data-href=${c}>
						<div class="item-box">
							<img class="item-1st" src="${a}" alt='${d}' >
							<img class="item-2nd" src="${h}" alt='${d}'>
							<img class="item-3rd" src="${b}" alt='${d}'>
						</div>
						<p>${I18N.get("fe.text.play_now")}</p>
					</a>
				</div>
				`:!1===g?`
				<div class="sub-nav-item maintenance">
					<span>${f}</span>	
					<a data-href=${c}>
						<div class="item-box">
							<img class="item-1st" src="${a}" alt='${d}'>
							<img class="item-2nd" src="${h}" alt='${d}'>
							<img class="item-3rd" src="${b}" alt='${d}'>
						</div>
						<p>${I18N.get("fe.text.play_now")}</p>
					</a>
					<div class="maintenance-box">
						<img src="/images/web/nav/SPORTS/maintenance.png">
						<h5>UNDER<br>MAINTENANCE</h5>
					</div>
				</div>
				`:void 0,b;case 7:return g=a.vendorCode,f=a.vendorStatus,c=GameNavBannerCommonHandler.getVendorOpenGameUrl(g,GameType.Sport,c),a.vendorH5IconPath||GameType.Sport.getShortName().toLowerCase(),a=b,"sportsbook"===b.toLowerCase()&&(a="book"),b="/images/web/nav/SPORTS/sport-"+a+"_"+e+".png",a="casino-sport-"+a,g+=" Betting",b=!0===f?`
				<div class="sub-nav-item">
					<div class="menu-item">
					<a class='${a}' data-href=${c}>
						<img src="${b}" alt='${g}' >
					</a>
					</div>
					<p>${I18N.get("fe.text.go")}</p>
				</div>
				`:!1===f?`
				<div class="sub-nav-item maintenance">
					<a class='${a}' data-href=${c}>
					<div class="menu-item"><img src="${b}" alt='${g}' >		
					</div>
					</a>
					<p>${I18N.get("fe.text.go")}</p>
					<div class="maintenance-box">
						<img class="maintenance" src="/images/web/nav/SPORTS/maintenance.png">
					</div>					
				</div>
				`:void 0,b;default:return""}}}}(),v=function(){switch(k){case 1:case 4:$(document).on("click",".sub-nav-item.normal-item a",function(a){a=$(this).data("href").replace('data-href="',"").replace('"',"");PageConfig.isLogin||""!==a?!PageConfig.isPromotionWallet||PageConfig.alreadyTurnOnPromotionWallet?window.open(a):(FE.GameHandler.setPlayGameUrl(a),a={vendor:a.split("v=").filter(a=>-1==a.indexOf("/"))[0].split("&")[0]},HttpService.post("/playerFE/V1/getMatchProviderPromotionWallet?v="+Math.random(),
a,{success:function(a){DialogHandler.showChoiceInactivePromotionWallet(a.data.matchPromotionWalletList)}})):"se"==PageConfig.webSiteType?$("#header-login").trigger("click"):DialogHandler.showRegister()});$(document).on("mousemove",".sub-nav-ani .sub-nav-item .item-box",function(a){var b=$(this).offset(),c=$(this).width()/2,e=$(this).height()/2;c=(c+b.left-a.pageX)/10;a=(e+b.top-a.pageY)/10;$(this).css({transform:"perspective(900px)rotateX("+c+"deg)rotateY("+a+"deg)scale3d(1.08, 1.08, 1.08)"});$(this).css({"z-index":"2"});
$(this).find(".item-1st").css({transform:"perspective(1200px)scale3d(1.13, 1.13, 1.13)"});$(this).find(".item-2nd").css({transform:"perspective(1200px)scale3d(1.08, 1.08, 1.08)translate("+c/3+"px,"+a/3+"px)"});$(this).find(".item-3rd").css({transform:"perspective(3600px)scale3d(1.05, 1.05, 1.05)translate("+c+"px,"+a+"px)"})});$(document).on("mouseout",".sub-nav-ani .sub-nav-item",function(){$(this).css({transform:"perspective(900px)rotateX(0deg)rotateY(0deg)scale3d(1, 1, 1)"});$(this).css({"z-index":"1"});
$(this).find(".item-1st").css({transform:"perspective(900px)scale3d(1, 1, 1)"});$(this).find(".item-2nd").css({transform:"perspective(900px)scale3d(1, 1, 1)"});$(this).find(".item-3rd").css({transform:"perspective(900px)scale3d(1, 1, 1)"})});break;case 2:case 3:$(".main-sub-nav .nav-item").mouseenter(function(){$(".main-sub-nav .nav-item .lv2-menu").stop().slideUp();$(this).children(".lv2-menu").stop().slideDown()}).mouseleave(function(){$(this).children(".lv2-menu").stop().slideUp()});$(document).on("click",
".menu-item a",function(a){a=$(this).data("href").replace('data-href="',"").replace('"',"");PageConfig.isLogin||""!==a?window.open(a):"se"==PageConfig.webSiteType?$("#header-login").trigger("click"):DialogHandler.showRegister()});break;case 5:$(document).on("click",".sub-nav-item a",function(a){a=$(this).data("href").replace('data-href="',"").replace('"',"");PageConfig.isLogin||""!==a?!PageConfig.isPromotionWallet||PageConfig.alreadyTurnOnPromotionWallet?window.open(a):(FE.GameHandler.setPlayGameUrl(a),
a={vendor:a.split("v=").filter(a=>-1==a.indexOf("/"))[0].split("&")[0]},HttpService.post("/playerFE/V1/getMatchProviderPromotionWallet?v="+Math.random(),a,{success:function(a){DialogHandler.showChoiceInactivePromotionWallet(a.data.matchPromotionWalletList)}})):"se"==PageConfig.webSiteType?$("#header-login").trigger("click"):DialogHandler.showRegister()});$(document).on("mousemove",".sub-nav-slide .sub-nav-item .item-box",function(a){var b=$(this).offset(),c=$(this).width()/2,e=$(this).height()/2;
c=(c+b.left-a.pageX)/10;a=(e+b.top-a.pageY)/10;$(this).css({transform:"perspective(400px)rotateX("+c+"deg)rotateY("+a+"deg)scale3d(1.08, 1.08, 1.08)"});$(this).css({"z-index":"2"});$(this).find(".item-1st").css({transform:"perspective(600px)scale3d(1.1, 1.1, 1.1)"});$(this).find(".item-2nd").css({transform:"perspective(600px)scale3d(1.05, 1.05, 1.05)translate("+c/3+"px,"+a/3+"px)"});$(this).find(".item-3rd").css({transform:"perspective(1800px)scale3d(1.02, 1.02, 1.02)translate("+c+"px,"+a+"px)"})});
break;case 6:$(".sub-nav-slide").on("click",".sub-nav-item a",function(a){a=$(this).data("href").replace('data-href="',"").replace('"',"");PageConfig.isLogin||""!==a?window.open(a):"se"==PageConfig.webSiteType?$("#header-login").trigger("click"):DialogHandler.showRegister()});$(document).on("mousemove",".sub-nav-slide .sub-nav-item .item-box",function(a){var b=$(this).offset(),c=$(this).width()/2,e=$(this).height()/2;c=(c+b.left-a.pageX)/10;a=(e+b.top-a.pageY)/10;$(this).css({transform:"perspective(400px)rotateX("+
c+"deg)rotateY("+a+"deg)scale3d(1.08, 1.08, 1.08)"});$(this).css({"z-index":"2"});$(this).find(".item-1st").css({transform:"perspective(600px)scale3d(1.1, 1.1, 1.1)"});$(this).find(".item-2nd").css({transform:"perspective(600px)scale3d(1.05, 1.05, 1.05)translate("+c/3+"px,"+a/3+"px)"});$(this).find(".item-3rd").css({transform:"perspective(1800px)scale3d(1.02, 1.02, 1.02)translate("+c+"px,"+a+"px)"})});break;case 7:$(".sub-nav-slide").on("click",".sub-nav-item",function(a){a=$(this).find(".menu-item a").data("href").replace('data-href="',
"").replace('"',"");PageConfig.isLogin||""!==a?window.open(a):"se"==PageConfig.webSiteType?$("#header-login").trigger("click"):DialogHandler.showRegister()})}},w=function(){switch(k){case 5:case 6:case 7:var a=function(){return $(".sub-nav-item").length},b=function(d){let g=a()-1;f=0>f?0:f;let h=0!==f||0<d;f+=d;f>g+1-4?b(-1):(e(f,h),c(f))},c=function(b){let c=a()-1+1;0<b?$(".sub-nav-slide .arrow-prev").attr("disabled",!1):$(".sub-nav-slide .arrow-prev").attr("disabled",!0);b<c-4?$(".sub-nav-slide .arrow-next").attr("disabled",
!1):$(".sub-nav-slide .arrow-next").attr("disabled",!0)},e=function(a,b){a*=285;let c=$(".sub-nav-item");!0===b&&c.animate({left:-1*a},"fast")};$(".main-sub-nav .nav-item").mouseenter(function(){$(".main-sub-nav .nav-item .sub-nav-slide").stop().slideUp();$(this).children(".sub-nav-slide").stop().slideDown()}).mouseleave(function(){$(this).children(".sub-nav-slide").stop().slideUp()});$(".sub-nav-slide .sub-nav-item").width("17.8125rem");let f=0;$(document).on("click",".sub-nav-slide .arrow-prev",
function(d){4<a()?b(-1):c(0)});$(document).on("click",".sub-nav-slide .arrow-next",function(d){4<a()?b(1):c(0)})}};return{init:function(){q();v();w()}}}();
GameNavBannerCommonHandler=function(){$("#lv2-menu-sport").attr("data-eventType");return{getVendorOpenGameUrl:function(b,f,e){let k=f===GameType.Sport,m=f===GameType.SLOT,n=f===GameType.TABLE,q=f===GameType.LOTTERY,r=f===GameType.ARCADE;f=f.getShortName().toLowerCase();return m?`data-pagetype="10" data-${PageConfig.PageParams.vendor}="${b}"`:n?"LUDO"===b||"BPOKER"===b?PageConfig.isLogin?`data-href="/player/playGame?t=${GameType.P2P.getShortName().toLowerCase()}&v=${b}" data-vendor="${b}"`:"":`data-pagetype="11" data-${PageConfig.PageParams.vendor}="${b}"`:
q?PageConfig.isLogin?`data-href="/player/playGame?t=${f}&v=${b}&act=161" data-vendor="${b}"`:"":k?"AWCMSV388"===b.toUpperCase()||"AWCMHORSEBOOK"===b.toUpperCase()||"SBOV2"===b.toUpperCase()||"UGV3"===b.toUpperCase()||"ICF"===b.toUpperCase()?PageConfig.isLogin?`data-href="/player/playGame?t=${f}&v=${b}${e?`&act=${e}`:""}" data-vendor="${b}"`:"":PageConfig.isLogin||"AWCMBC"!==b.toUpperCase()?PageConfig.isLogin?`data-href="/player/playGame?t=${f}&v=${b}${e?`&act=${e}`:""}" data-vendor="${b}"`:`data-href="/guest/viewGame?t=${f}&v=${b}${e?
`&act=${e}`:""}" data-vendor="${b}"`:"":r?`data-pagetype="25" data-${PageConfig.PageParams.vendor}="${b}"`:PageConfig.isLogin?`data-href="/player/playGame?t=${f}&v=${b}" data-vendor="${b}"`:""}}}();

