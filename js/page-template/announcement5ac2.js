var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.SymbolClass=function(a,b){this.$jscomp$symbol$id_=a;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:b})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};
$jscomp.Symbol=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(c||"")+"_"+b++,c)}var b=0;return a}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};
$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var c=0,e={next:function(){if(c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e};
$jscomp.polyfill=function(a,b,c,e){if(b){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var f=a[e];f in c||(c[f]={});c=c[f]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.values",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a,c){return c})}},"es8","es3");"undefined"==typeof AnnouncementHandler&&(AnnouncementHandler={});
(function(){var a=[],b=[],c=[],e=[],f=[],k=localStorage.getItem("popupMaxId");null==k&&(k=0);AnnouncementHandler.renderAnnouncement=function(a){$.each(a,function(a,d){d.pk=d.id;d.id="announcement-"+d.pk;d.image=PageConfig.uploadImageUrl+"/upload/announcement/"+d.imageSliderPath});TemplateUtil.autoBindListData(a,"#main_announcement_template","#main_announcement_container")};const m=function(a){$.each(a,function(a,d){d.pk=d.id;d.id="running-"+d.pk});TemplateUtil.autoBindListData(a,"#main_runngin_msg_template",
"#main_runngin_msg_container")};AnnouncementHandler.initAnnouncementFlexSlider=function(){try{$("#main_announcement_container").slick({speed:1E3,infinite:!0,pauseOnHover:!0,pauseOnDotsHover:!0,dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:3E3})}catch(h){console.error(h.message||h)}finally{}};AnnouncementHandler.bindAnnouncementOnClick=function(){$("#main_announcement_container li a").click(function(a){a=$(a.currentTarget).data("pk");var b="/guest/getPromotionMessageDetail?rnd=";PageConfig.isLogin&&
(b="/player/getPromotionMessageDetail?rnd=");$.ajax({url:b+Math.random(),type:"GET",dataType:"json",data:{id:a}}).done(function(a){a.contentType==MessageContentType.TEXT.value?DialogHandler.showMessageDetail(a):a.contentType==MessageContentType.LINK.value&&UiHandler.handleOpenUrl(a)}).fail(function(a){Trace.error(a);DialogHandler.showErrorAlert()})})};const n=function(a){let b=$("#main_sport_slider_container");b.length&&($.each(a,function(a,b){b.id="sportslider-"+b.id;b.image=PageConfig.uploadImageUrl+
"/upload/announcement/"+b.imageSliderPath;b.bannerPath=PageConfig.uploadImageUrl+"/upload/announcement/"+b.imageSliderPath}),TemplateUtil.autoBindListData(a,"#main_wrap_sport_template","#main_sport_slider_container"),b.slick({speed:1E3,infinite:!0,pauseOnHover:!0,pauseOnDotsHover:!0,dots:!1,arrows:!0,prevArrow:$("#main_wrap_sport .flex-prev"),nextArrow:$("#main_wrap_sport .flex-next")}),DataImageUtils.setBackground(b))};AnnouncementHandler.bindSportSlider=function(a,b){try{$(a).slick({speed:1E3,infinite:!0,
pauseOnHover:!0,pauseOnDotsHover:!0,dots:!1,arrows:!0,prevArrow:$(b).find(".flex-prev"),nextArrow:$(b).find(".flex-next")})}catch(d){console.error(d.message||d)}finally{}};AnnouncementHandler.renderTwoSportSlider=function(a){if($("#main_sport_slider_container_left").length&&$("#main_sport_slider_container_right").length){var b=[],d=[];$.each(a,function(a,g){g.id="sportslider-"+g.id;g.image=PageConfig.uploadImageUrl+"/upload/announcement/"+g.imageSliderPath;g.bannerPath=PageConfig.uploadImageUrl+"/upload/announcement/"+
g.imageSliderPath;0===a%2?b.push(g):d.push(g)});TemplateUtil.autoBindListData(b,"#main_wrap_sport_template","#main_sport_slider_container_left");TemplateUtil.autoBindListData(d,"#main_wrap_sport_template","#main_sport_slider_container_right");AnnouncementHandler.bindSportSlider("#main_sport_slider_container_left","#main_wrap_sport_left");AnnouncementHandler.bindSportSlider("#main_sport_slider_container_right","#main_wrap_sport_right");DataImageUtils.setBackground($("#main_sport_slider_container_left"));
DataImageUtils.setBackground($("#main_sport_slider_container_right"))}};AnnouncementHandler.renderThreeSportSlider=function(a){if($("#main_sport_slider_container_three_left").length&&$("#main_sport_slider_container_three_middle").length&&$("#main_sport_slider_container_three_right").length){var b=[],d=[],c=[];$.each(a,function(a,e){e.id="sportslider-"+e.id;e.image=PageConfig.uploadImageUrl+"/upload/announcement/"+e.imageSliderPath;e.bannerPath=PageConfig.uploadImageUrl+"/upload/announcement/"+e.imageSliderPath;
0===a%3?b.push(e):1===a%3?d.push(e):c.push(e)});TemplateUtil.autoBindListData(b,"#main_wrap_sport_template","#main_sport_slider_container_three_left");TemplateUtil.autoBindListData(d,"#main_wrap_sport_template","#main_sport_slider_container_three_middle");TemplateUtil.autoBindListData(c,"#main_wrap_sport_template","#main_sport_slider_container_three_right");AnnouncementHandler.bindSportSlider("#main_sport_slider_container_three_left","#main_wrap_sport_three_left");AnnouncementHandler.bindSportSlider("#main_sport_slider_container_three_middle",
"#main_wrap_sport_three_middle");AnnouncementHandler.bindSportSlider("#main_sport_slider_container_three_right","#main_wrap_sport_three_right");DataImageUtils.setBackground($("#main_sport_slider_container_three_left"));DataImageUtils.setBackground($("#main_sport_slider_container_three_middle"));DataImageUtils.setBackground($("#main_sport_slider_container_three_right"))}};AnnouncementHandler.renderSportSliderSlick=function(a){if($("#main_sport_slider_slick").length){var b=[];$.each(a,function(a,c){c.id=
"sportslider-"+c.id;c.image=PageConfig.uploadImageUrl+"/upload/announcement/"+c.imageSliderPath;c.bannerPath=PageConfig.uploadImageUrl+"/upload/announcement/"+c.imageSliderPath;b.push(c)});TemplateUtil.autoBindListData(b,"#main_wrap_sport_template","#main_sport_slider_slick");DataImageUtils.setBackground($("#main_sport_slider_slick"));$(".sports-slider").slick({speed:1E3,infinite:!1,slidesToShow:5,slidesToScroll:5,pauseOnHover:!0,pauseOnDotsHover:!0,dots:!1,arrows:!0,prevArrow:$(".navigation-1 .flex-prev"),
nextArrow:$(".navigation-1 .flex-next")})}};AnnouncementHandler.initAnnouncementAndRunningContainer=function(){var h="/guest/getMessages?rnd=";PageConfig.isLogin&&(h="/player/getMessages?rnd=");getDataByAjax(h,function(h){try{for(var d=0;d<h.length;d++){let g=h[d];DataBase.msg.insert(g);g.type==MessageType.TOP_BANNER.value?a.push(g):g.type==MessageType.RUNNING.value?b.push(g):g.type==MessageType.POP.value?c.push(g):g.type==MessageType.SYSTEM.value?e.push(g):g.type==MessageType.SPORT_SLIDER.value&&
f.push(g)}AnnouncementHandler.renderAnnouncement(a);AnnouncementHandler.initAnnouncementFlexSlider();AnnouncementHandler.bindAnnouncementOnClick();n(f);AnnouncementHandler.renderTwoSportSlider(f);AnnouncementHandler.renderThreeSportSlider(f);AnnouncementHandler.renderSportSliderSlick(f);m(b);MarqueeWeb.init();if(PageConfig.isLogin){let a=AnnouncementHandler.getUnReadPopupMsg();a&&(a.contentType==MessageContentType.LINK.value&&a.imageBannerPath?DialogHandler.showImagePopup(a,a.imageBannerPath):DialogHandler.showPopup(a.title,
a.webContent))}let l=$("#main_announcement_container");l&&DataImageUtils.setBackground(l)}catch(l){Trace.error(l)}})};AnnouncementHandler.getUnReadPopupMsg=function(){if(PageConfig.alreadyShowPopup)return null;for(var a=0,b=c.length;a<b;a++){var d=c[a];if(null==d.read||1!=d.read)return k=d.id,d}return null};AnnouncementHandler.markPopupAsRead=function(a){null!=a&&(a.preventDefault(),a.stopPropagation());$("#popup_msg").hide();$("#img_popup").hide();$("#pop_bg").fadeOut();a=0;for(var b=c.length;a<
b;a++){var d=c[a];if(k==d.id){d.read=1;break}}setTimeout(function(){var a=AnnouncementHandler.getUnReadPopupMsg();a?a.contentType==MessageContentType.LINK.value&&a.imageBannerPath?DialogHandler.showImagePopup(a,a.imageBannerPath):DialogHandler.showPopup(a.title,a.webContent):($("#popup_msg").hide(),$("#pop_bg").fadeOut())},1E3)}})();"undefined"==typeof DataBase&&(DataBase={});
(function(){DataBase.msg={};var a=new HashMap;DataBase.msg.insert=function(b){a.put(b.id,b)};DataBase.msg.remove=function(b){a.remove(b)};DataBase.msg.queryByID=function(b){return a.get(b)};DataBase.msg.queryAll=function(){return a.values()};DataBase.msg.clean=function(){a.clear()}})();"undefined"==typeof MarqueeWeb&&(MarqueeWeb={});
(function(){function a(){b();$("#marqueeRun li").mouseover(function(){void 0!==e&&(clearInterval(e),e=void 0)});$("#marqueeRun li").mouseleave(function(){void 0===e&&b()})}function b(){f=void 0===f?c():f;(k=document.querySelector("#marqueeRun ul"))&&(e=setInterval(()=>{var a=f;var b=(b=document.querySelector("#marqueeRun ul"))?b.offsetWidth:0;a<-1*b&&(f=c());--f;k.style.transform="translate("+f+"px)"},15))}function c(){const a=document.querySelector("#marqueeRun");return a?a.offsetWidth:0}var e;let f,
k;MarqueeWeb.init=function(){a()}})();
