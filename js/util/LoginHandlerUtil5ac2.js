"undefined"==typeof LoginHandlerUtil&&(LoginHandlerUtil={});
(function(){LoginHandlerUtil.guestLogin=function(c,e,d,f,g=!1){var h=(new TrafficStatistics).get(),k=(new TrafficStatistics({canvas:!0})).get();(new TrafficStatistics({ie_activex:!0})).get();var b=(new TrafficStatistics({screen_resolution:!0})).get(),n=new Promise(function(a,b){(new TrafficStatistics2).get(function(m){a(m)})}),l=new Promise(function(a,b){Fingerprint3.load().then(a=>a.get()).then(b=>{a(b.visitorId)})});"undefined"!==typeof AdElementHandler&&AdElementHandler.init(AdEventType.LOGIN_EVENT,
PageConfig.country,PageConfig.lang,{user_id:c});Promise.all([l,n]).then(([a,l])=>{a={userId:c,password:e,fingerprint:h,fingerprint2:l,fingerprintCanvas:k,fingerprintActiveX:a,fingerprintResolution:b,isBioLogin:g};d&&(a.captcha=d);$.ajax({url:"/guest/login",type:"POST",dataType:"json",data:a,success:function(a){f(a)},error:function(a){}})})};LoginHandlerUtil.affiliateLogin=function(c,e,d){var f=(new TrafficStatistics).get(),g=(new TrafficStatistics({canvas:!0})).get(),h=(new TrafficStatistics({ie_activex:!0})).get(),
k=(new TrafficStatistics({screen_resolution:!0})).get();(new Promise(function(b,c){(new TrafficStatistics2).get(function(c){b(c)})})).then(b=>{HttpUtil.post("/affiliate/main/login",{userId:c,password:e,fingerprint:f,fingerprint2:b,fingerprintCanvas:g,fingerprintActiveX:h,fingerprintResolution:k},d)})}})();
