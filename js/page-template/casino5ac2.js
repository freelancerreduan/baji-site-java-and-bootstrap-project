"undefined"==typeof CasinoPageHandler&&(CasinoPageHandler={});
(function(){var h=function(){var a=PageConfig.casinos;$.each(a,function(a,b){b.pk=b.id;b.id="casino-"+b.vendor;b.image=b.vendorWebIconPath?b.vendorWebIconPath:PageConfig.cdnDomain+"/images/web/casino/main-casino-xs-"+b.vendor+".jpg";if(a=PageConfig.casinoInfo[b.vendor])b.desc1=b.subTitle?b.subTitle:I18N.get(a.desc1),b.desc2=b.description?b.description:I18N.get(a.desc2),b.playItems=a.playItems,b.playItems&&$.each(b.playItems,function(a,b){b.title=I18N.get(b.title)})});1==PageConfig.casinoLayout?d(a):
2==PageConfig.casinoLayout?e(a):g(a);$("#casino_list_container a.play-item, #casino_lg_container a.play-item").each(function(a,b){a=$(b);a.addClass(a.data("css"))});$(".casino-lg, .casino-xs").hover(function(){$(this).addClass("active")},function(){$(this).removeClass("active")})},d=function(a){TemplateUtil.autoBindListData(a,"#casino_lg_template","#casino_lg_container");2==a.length?$("#casinoBannerContainer").show():3==a.length&&(a=$("#casinoBannerMd").clone().show(),$("#casino_lg_container").append(a));
DataImageUtils.setBackground(JsCache.get("#casino_lg_container"))},e=function(a){var f=[],b=[];var d=13==a.length?0:11==a.length?1:2;$.each(a,function(a,c){a<d?(c.image=c.vendorWebIconPath?c.vendorWebIconPath:PageConfig.cdnDomain+"/images/web/casino/main-casino-lg-"+c.vendor+".jpg",f.push(c)):b.push(c)});TemplateUtil.autoBindListData(f,"#casino_lg_template","#casino_lg_container");TemplateUtil.autoBindListData(b,"#casino_template","#casino_list_container");$("#casinoBannerContainer").hide();if(11==
a.length)a=$("#casinoBannerMd").clone(),$("#casino_lg_container").append(a);else if(5==a.length||9==a.length||10==a.length||13==a.length){if(9==a.length){var e=$("#casinoBannerLg").clone();$("#casino_list_container").append(e)}if(5==a.length||10==a.length||13==a.length)a=$("#casinoBannerXs").clone(),$("#casino_list_container").append(a)}DataImageUtils.setBackground(JsCache.get("#casino_lg_container"));DataImageUtils.setBackground(JsCache.get("#casino_list_container"));DataImageUtils.setSEOTitle(JsCache.get("#casino_lg_container"));
DataImageUtils.setSEOTitle(JsCache.get("#casino_list_container"))},g=function(a){TemplateUtil.autoBindListData(a,"#casino_template","#casino_list_container");a=$("#casinoBannerXs").clone();$("#casino_list_container").append(a);DataImageUtils.setBackground(JsCache.get("#casino_list_container"))},k=function(){var a="/guest/getMessagesByType?rnd=";PageConfig.isLogin&&(a="/player/getMessagesByType?rnd=");getDataByAjax(a,function(a){AnnouncementHandler.renderAnnouncement(a);AnnouncementHandler.initAnnouncementFlexSlider();
AnnouncementHandler.bindAnnouncementOnClick();(a=JsCache.get("#main_announcement_container"))&&DataImageUtils.setBackground(a)},{messageType:MessageType.CASINO_TOP_BANNER.value})};CasinoPageHandler.init=function(){setTimeout(function(){k()},500);h()}})();
