if(PageConfig.liveChat[PageConfig.webSiteType]["liveAgent.id"]){var liveAgent_id=PageConfig.liveChat[PageConfig.webSiteType]["liveAgent.id"],liveAgent_host=PageConfig.liveChat[PageConfig.webSiteType]["liveAgent.host"],liveAgent_button=PageConfig.liveChat[PageConfig.webSiteType]["liveAgent.button"];(function(a,b,c){var d=a.scripts[a.scripts.length-1];a=a.createElement("script");a.id=liveAgent_id;a.async=!0;a.src=b;a.onload=a.onreadystatechange=function(){var a=this.readyState;a&&"complete"!=a&&"loaded"!=
a||c(this)};d.parentElement.insertBefore(a,d.nextSibling)})(document,liveAgent_host+"/scripts/track.js",function(a){LiveAgent.createButton(liveAgent_button,a)})}
if(PageConfig.liveChat[PageConfig.webSiteType]["freshbot.client"]){var fresh_host=PageConfig.liveChat[PageConfig.webSiteType]["freshbot.host"],fresh_client=PageConfig.liveChat[PageConfig.webSiteType]["freshbot.client"],fresh_hash=PageConfig.liveChat[PageConfig.webSiteType]["freshbot.hash"],fresh_region=PageConfig.liveChat[PageConfig.webSiteType]["freshbot.region"];(function(a,b,c){if(!a.getElementById("spd-busns-spt")){b=a.getElementsByTagName("script")[0];a=a.createElement("script");var d=!1;a.id=
"spd-busns-spt";a.async="async";a.setAttribute("data-self-init","false");a.setAttribute("data-init-type","opt");a.src=fresh_host+"/assets/share/js/freshbots.min.js";a.setAttribute("data-client",fresh_client);a.setAttribute("data-bot-hash",fresh_hash);a.setAttribute("data-env","prod");a.setAttribute("data-region",fresh_region);c&&(a.onreadystatechange=a.onload=function(){d||c();d=!0});b.parentNode.insertBefore(a,b)}})(document,window,function(){Freshbots.initiateWidget({autoInitChat:!1,getClientParams:function(){return{"sn::cstmr::id":"",
"cstmr::eml":"","cstmr::phn":"","cstmr::nm":""}}},function(a){},function(a){})})}
if(PageConfig.liveChat[PageConfig.webSiteType]["freshchat.token"]){var initiateCall=function(){initialize(document,"Freshchat-js-sdk")},initialize=function(a,b){var c;a.getElementById(b)?initFreshChat():((c=a.createElement("script")).id=b,c.async=!0,c.src=PageConfig.liveChat[PageConfig.webSiteType]["freshchat.host"]+"/js/widget.js",c.onload=initFreshChat,a.head.appendChild(c))},initFreshChat=function(){window.fcWidget.init({config:{cssNames:{widget:PageConfig.liveChat[PageConfig.webSiteType]["freshchat.positionClass"]}},token:PageConfig.liveChat[PageConfig.webSiteType]["freshchat.token"],
host:PageConfig.liveChat[PageConfig.webSiteType]["freshchat.host"]});window.fcWidget.user.clear().then(function(){console.log("User cleared")},function(){console.log("User Not cleared")});"jw"==PageConfig.webSiteType&&PageConfig.userId&&0<PageConfig.userId.length&&window.fcWidget.user.setFirstName(PageConfig.userId);PageConfig.email&&0<PageConfig.email.length&&window.fcWidget.user.setEmail(PageConfig.email);window.fcWidget.user.setProperties({plan:"Estate",status:"Active"})};window.addEventListener?
window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);$(document).ready(function(){$(".icon-phone").unbind("click");$(".freshChat,.icon-phone").bind("click",function(){window.fcWidget.open();window.fcWidget.show()})})}
PageConfig.liveChat[PageConfig.webSiteType]["livechatincV1.licenseNum"]&&(window.__lc=window.__lc||{},window.__lc.license=PageConfig.liveChat[PageConfig.webSiteType]["livechatincV1.licenseNum"],window.__lc.chat_between_groups=!1,PageConfig.liveChat[PageConfig.webSiteType]["livechatincV1.group"]&&(window.__lc.group=PageConfig.liveChat[PageConfig.webSiteType]["livechatincV1.group"]),function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=("https:"==document.location.protocol?
"https://":"http://")+"cdn.livechatinc.com/tracking.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);document.getElementById("livechatinc-noscript").innerHTML=`
			<a href="https://www.livechatinc.com/chat-with/${PageConfig.liveChat[PageConfig.webSiteType]["livechatincV1.licenseNum"]}/" rel="nofollow">Chat with us</a>,
			powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>`}());
PageConfig.liveChat[PageConfig.webSiteType]["livechatincV2.licenseNum"]&&(window.__lc=window.__lc||{},window.__lc.license=PageConfig.liveChat[PageConfig.webSiteType]["livechatincV2.licenseNum"],window.__lc.chat_between_groups=!1,PageConfig.liveChat[PageConfig.webSiteType]["livechatincV2.group"]&&(window.__lc.group=PageConfig.liveChat[PageConfig.webSiteType]["livechatincV2.group"]),function(a,b,c){function d(a){return e._h?e._h.apply(null,a):e._q.push(a)}var e={_q:[],_h:null,_v:"2.0",on:function(){d(["on",
c.call(arguments)])},once:function(){d(["once",c.call(arguments)])},off:function(){d(["off",c.call(arguments)])},get:function(){if(!e._h)throw Error("[LiveChatWidget] You can't use getters before load.");return d(["get",c.call(arguments)])},call:function(){d(["call",c.call(arguments)])},init:function(){var a=b.createElement("script");a.async=!0;a.type="text/javascript";a.src="https://cdn.livechatinc.com/tracking.js";b.head.appendChild(a)}};!a.__lc.asyncInit&&e.init();a.LiveChatWidget=a.LiveChatWidget||
e;document.getElementById("livechatinc-noscript").innerHTML=`
			<a href="https://www.livechatinc.com/chat-with/${PageConfig.liveChat[PageConfig.webSiteType]["livechatincV1.licenseNum"]}/" rel="nofollow">Chat with us</a>,
			powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>`}(window,document,[].slice));
if(PageConfig.liveChat[PageConfig.webSiteType]["CSTool.token"]){var init$jscomp$2=function(){const e=document.createElement("div");e.setAttribute("id","cst");e.style.position="fixed";e.style.zIndex="214748360";e.style.right="auto";e.style.bottom="0";e.style.width="100%";const f=document.createElement("iframe");f.setAttribute("src",d+"/customer_chat?settingsId=1&playerId="+a+"&token="+c);f.setAttribute("style","width: 0px; height: 0px");e.appendChild(f);document.body.appendChild(e);window.onmessage=
function(a){if(a.origin===d){f.setAttribute("style",a.data.style);let c="";0<a.data.divWidth&&("true"===b?(f.setAttribute("style","width: 100%; height: 100%;"),c="width: "+window.innerWidth+"px;",c+="height: "+window.innerHeight+"px;",c+="bottom: 0px; right: 0%; left:0%;"):c="width: "+a.data.divWidth+"px;");1==a.data.positionAlign?e.setAttribute("style","position: fixed; right: "+a.data.positionSideSpacing+"px; bottom: "+a.data.positionBottomSpacing+"px;"+c+" z-index: 214748360;"):e.setAttribute("style",
"position: fixed; left: "+a.data.positionSideSpacing+"px; bottom: "+a.data.positionBottomSpacing+"px;"+c+" z-index: 214748360;")}}};let a=PageConfig.userId,b=PageConfig.isH5,c=PageConfig.liveChat[PageConfig.webSiteType]["CSTool.token"],d=PageConfig.liveChat[PageConfig.webSiteType]["CSTool.domain"];(function(){init$jscomp$2()})()}
PageConfig.liveChat[PageConfig.webSiteType]["intercom.app_id"]&&(window.intercomSettings={api_base:PageConfig.liveChat[PageConfig.webSiteType]["intercom.api_base"],app_id:PageConfig.liveChat[PageConfig.webSiteType]["intercom.app_id"],custom_launcher_selector:".intercom_custom_launcher",hide_default_launcher:PageConfig.liveChat[PageConfig.webSiteType]["intercom.hide_default_launcher"]||!1},PageConfig.userId&&(window.intercomSettings.user_id=PageConfig.userId,window.intercomSettings.name=PageConfig.userId,
window.intercomSettings.email=PageConfig.email,window.intercomSettings.created_at=PageConfig.playerSignUpTime,window.intercomSettings.user_hash=PageConfig.userHash,window.intercomSettings.phone=`+${PageConfig.callCode}${PageConfig.phone}`),function(){var a=window,b=a.Intercom;if("function"===typeof b)b("reattach_activator"),b("update",a.intercomSettings);else{var c=document,d=function(){d.c(arguments)};d.q=[];d.c=function(a){d.q.push(a)};a.Intercom=d;b=function(){var a=c.createElement("script");a.type=
"text/javascript";a.async=!0;a.src=`https://widget.intercom.io/widget/${PageConfig.liveChat[PageConfig.webSiteType]["intercom.app_id"]}`;var b=c.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)};"complete"===document.readyState?b():a.attachEvent?a.attachEvent("onload",b):a.addEventListener("load",b,!1)}}());
if(PageConfig.liveChat[PageConfig.webSiteType]["tawk.id"]){var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;(function(){var a=document.createElement("script"),b=document.getElementsByTagName("script")[0];a.async=!0;a.src="https://embed.tawk.to/"+PageConfig.liveChat[PageConfig.webSiteType]["tawk.id"]+"/default";a.charset="UTF-8";a.setAttribute("crossorigin","*");b.parentNode.insertBefore(a,b)})()}
const LIVE=function(){let a=[];return{showIcon:function(){PageConfig.liveChat[PageConfig.webSiteType]["tawk.id"]&&window.Tawk_API.showWidget();for(let b of a)document.querySelector(b)&&(document.querySelector(b).style.display="")},hideIcon:function(){PageConfig.liveChat[PageConfig.webSiteType]["tawk.id"]&&window.Tawk_API.hideWidget();for(let b of a)document.querySelector(b)&&(document.querySelector(b).style.display="none !important")},addIconContainer:function(b){b&&a.push(b)}}}();
