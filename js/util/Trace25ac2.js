"undefined"==typeof BrowserUtil&&(BrowserUtil={});
(function(){var a=!1,d,b,c,f=[{string:navigator.userAgent,subString:"Edge",identity:"Edge"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},
{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],e=[{string:navigator.platform,subString:"Win",
identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}],h=function(a){for(var b=0;b<a.length;b++){var c=a[b].string,d=a[b].prop;this.versionSearchString=a[b].versionSearch||a[b].identity;if(c){if(-1!=c.indexOf(a[b].subString))return a[b].identity}else if(d)return a[b].identity}},k=function(a){var b=a.indexOf(this.versionSearchString);if(-1!=
b)return parseFloat(a.substring(b+this.versionSearchString.length+1))},g=function(){a||(d=h(f)||"An unknown browser",b=k(navigator.userAgent)||k(navigator.appVersion)||"an unknown version",c=h(e)||"an unknown OS",a=!0)};BrowserUtil.getBrowserName=function(){a||g();return d};BrowserUtil.getBrowserVersion=function(){a||g();return b};BrowserUtil.getOS=function(){a||g();return c}})();"undefined"==typeof Trace&&(trace=Trace={});
(function(){Trace.getStackTrace=function(a){var d=[],b=!1;if(a.stack){b=a.stack.split("\n");for(var c=0,f=b.length;c<f;c++){var e=b[c].match(/http:\S+\.js\S+:[0-9]+/);e&&d.push(e)}b=!0}else if(window.opera&&a.message){b=a.message.split("\n");c=0;for(f=b.length;c<f;c++)e=b[c],b[c+1]&&(e+=" at "+b[c+1],c++),d.push(e);b=!0}if(!b)for(b=arguments.callee.caller;b;)c=b.toString(),c=c.substring(c.indexOf("function")+8,c.indexOf("("))||"anonymous",d.push(c),b=b.caller;return d};Trace.printStackTrace=function(a){if(a)a=
Trace.getStackTrace(a),a=a.join("\n"),$j.post("/member/jsErrorLog.jsp",{browser:BrowserUtil.getBrowserName(),version:BrowserUtil.getBrowserVersion(),msg:a}),Trace.log(a);else try{i.dont.exist+=0}catch(d){a=Trace.getStackTrace(d),a=a.join("\n"),$j.post("/member/jsErrorLog.jsp",{browser:BrowserUtil.getBrowserName(),version:BrowserUtil.getBrowserVersion(),msg:a}),Trace.log(a)}};window.console?(Trace.log=console.log,Trace.info=console.info,Trace.warn=console.warn,Trace.error=console.error,Trace.trace=
function(a){try{console.trace(a)}catch(d){console.log(a)}},Trace.dir=function(a){try{console.dir(a)}catch(d){console.log(a)}},Trace.debug=function(a){try{console.debug(a)}catch(d){console.log(a)}}):(Trace.log=function(a){},Trace.warn=function(a){},Trace.error=function(a){},Trace.info=function(a){},Trace.trace=function(a){},Trace.dir=function(a){},Trace.debug=function(a){})})();

