"undefined"==typeof ForgetPassHandler&&(ForgetPassHandler={});
(function(){var f=function(){var a=JsCache.get("#forgetPasswordForm");PageConfig.forgetPasswordValidator=a.validate({onfocusout:!1,onkeyup:!1,errorPlacement:function(b,c){var d="";""==c.val()&&(d=" "+c.attr("placeholder"));c.parent().addClass("wrong");a.find("div.error").addClass("active").html('<i class="icon-error"></i><span>'+b.text()+d+"</span>");$("#loginPopup").hasClass("login-pop-group")&&setTimeout(()=>{$(".login-pop-group .input-slides").css("height",$(".input-forget").outerHeight())},300)},
errorClass:"wrong"});a.find("#userId_reset").rules("add",{required:!0,maxlength:15,userId:!0});a.find("#email_reset").rules("add",{required:!0,maxlength:50,email:!0})},g=function(){var a=JsCache.get("#forgetPasswordSmsForm");PageConfig.forgetPasswordSmsValidator=a.validate({onfocusout:!1,onkeyup:!1,errorPlacement:function(b,c){var d="";""==c.val()&&(d=" "+c.attr("placeholder"));c.parent().addClass("wrong");a.find("div.error").addClass("active").html('<i class="icon-error"></i><span>'+b.text()+d+"</span>");
$("#loginPopup").hasClass("login-pop-group")&&setTimeout(()=>{$(".login-pop-group .input-slides").css("height",$(".input-forget").outerHeight())},300)},errorClass:"wrong"});a.find("#userIdSms_reset").rules("add",{required:!0,maxlength:15,userId:!0});a.find("#phone_reset").rules("add",{required:!0,byCallingCode:function(){return[$("[name=callingCode]").val()]},messages:{byCallingCode:function(){return I18N.get("msg.error.account.phone.isNotValidated")}}});a.find("#currencyTypeId").rules("add",{required:!0})},
h=function(a){a.preventDefault(a);if(JsCache.get("#loginPopup").hasClass("login-pop-group")&&$("#forgetPasswordSmsSection").hasClass("active")){if(a=$("#phone_reset"),a.valid()){a.parent().removeClass("wrong");var b=$("#callingCode");if(b.valid()){b.parent().removeClass("wrong");var c=$("#userIdSms_reset");c.valid()&&(c.parent().removeClass("wrong"),JsCache.get("#forgetPasswordSmsForm").find("div.error").removeClass("active"),loading("#forgotPasswordButton",!0),$.ajax({url:"/guest/forgotPasswordBySms?v="+
Math.random(),type:"POST",dataType:"json",data:{userId:c.val(),phone_reset:a.val(),callingCode:b.val(),domain:window.location.host},success:function(a){loading("#forgotPasswordButton",!1);200==a.status?(JsCache.get("#loginPopup .btn-close").click(),DialogHandler.showAlert("ui.text.reset",a.message)):DialogHandler.popLoginFailMessage(a.message)},error:function(a){Trace.error(a)}}))}}}else b=$("#userId_reset"),b.valid()&&(b.parent().removeClass("wrong"),a=$("#email_reset"),a.valid()&&(a.parent().removeClass("wrong"),
JsCache.get("#forgetPasswordForm").find("div.error").removeClass("active"),loading("#forgotPasswordButton",!0),b=b.val(),a=a.val(),$.ajax({url:"/guest/forgotPassword?v="+Math.random(),type:"POST",dataType:"json",data:{userId:b,email:a,domain:window.location.origin},success:function(a){loading("#forgotPasswordButton",!1);200==a.status?(JsCache.get("#loginPopup .btn-close").click(),DialogHandler.showAlert("ui.text.reset",a.message)):DialogHandler.popLoginFailMessage(a.message)},error:function(a){Trace.error(a)}})))};
let k=function(){$("#link_forget_otp").click(function(){$("#loginPopup .input-slides").css("transform","translate3d(0, 0px, 0px)").addClass("step01")});$("#loginPopup .reset-password-step01 .btn-default-xs").click(function(){ForgetPassHandler.checkCaptchaThenSendOtp()});$("#loginPopup .reset-password-step02 .btn-default-xs").click(function(){$("#loginPopup .input-slides").removeClass().addClass("step03").addClass("input-slides")});$(".reset-password-step03 .btn-default-xs").click(function(){ForgetPassHandler.checkOtpThenChangePassword()});
$("#loginPopup .reset-password-step04 .btn-default-xs,.btn-cancel").click(function(){$("#loginPopup .input-slides").removeClass().addClass("login-slide").addClass("input-slides")});$("#loginPopup .reset-password-step02 .icon-return").click(function(){$("#loginPopup .input-slides").removeClass().addClass("step01").addClass("input-slides")});$("#loginPopup .reset-password-step03 .icon-return").click(function(){$("#loginPopup .input-slides").removeClass().addClass("step02").addClass("input-slides")});
$("#loginPopup .reset-password-step04 .icon-return").click(function(){$("#loginPopup .input-slides").removeClass().addClass("step03").addClass("input-slides")})};var l=function(a){a.preventDefault(a);$("#loginPopup .input-slides").removeClass().addClass("login-slide").addClass("input-slides")};ForgetPassHandler.checkCaptchaThenSendOtp=function(){var a=$("#userId_reset");if(a.valid()){a.parent().removeClass("wrong");var b=a=null;var c=-1===$("#phone_or_email_reset").val().indexOf("@")?a=$("#phone_or_email_reset").val():
b=$("#phone_or_email_reset").val();$(".emailOrPhone").text(c);JsCache.get("#forgetPasswordForm").find("div.error").removeClass("active");var d=$("#loginPopup .reset-password-step01 .btn-default-xs");UiHandler.loading(d,!0);$.ajax({type:"POST",url:"/guest/checkCaptchaThenSendOtp",dataType:"JSON",data:{userId:$("#userId_reset").val(),phone:a,email:b,captcha:$("#captchaInputOtp").val(),domain:window.location.host},success:function(a){UiHandler.loading(d,!1);200!=a.status?(JsCache.get("#forgetPasswordForm").find("div.error").addClass("active").html('<i class="icon-error"></i><span>'+
I18N.get(a.message)+"</span>"),ForgetPassHandler.getCaptcha()):(e(60),$("#loginPopup .input-slides").removeClass().addClass("step02").addClass("input-slides"))}})}};let e=function(a){0===a?$("#otpCountdown").text(""):($("#otpCountdown").text(I18N.get("ui.text.otpCountdown",[a])),a--,setTimeout(function(){e(a)},1E3))};ForgetPassHandler.getCaptcha=function(){let a=Math.random();null!=document.captchaImg&&(document.captchaImg.src="/captcha?"+a)};ForgetPassHandler.checkOtpThenChangePassword=function(){let a=
"";$("#digit-group input").each(function(b,c){a+=c.value});$(".reset-password-step04 .code-conent > p > b").text($("#phone_or_email_reset").val());$.ajax({type:"POST",url:"/guest/checkOtpThenChangePassword",dataType:"JSON",data:{userId:$("#userId_reset").val(),newPassword:$("#newPassword").val(),optCode:a},success:function(a){200!=a.status?JsCache.get("#checkOtpSection").find("div.error").addClass("active").html('<i class="icon-error"></i><span>'+I18N.get(a.message)+"</span>"):($("#loginPopup .input-slides").removeClass().addClass("step04").addClass("input-slides"),
setTimeout(function(){top.location.reload()},1E4))}})};ForgetPassHandler.init=function(){JsCache.get("#forgetPasswordForm")&&f();JsCache.get("#forgetPasswordSmsForm")&&g();$("#forgotPasswordButton").on("click",h);k();$("#reloadCaptchaTrigger").click(function(){ForgetPassHandler.getCaptcha()});$("#loginPopup .btn-close").on("click",l);$("#digit-group").find("input").each(function(){$(this).attr("maxlength",1);$(this).on("keyup",function(a){let b=$($(this).parent().parent());if(8===a.keyCode||37===
a.keyCode)a=b.find("input#"+$(this).data("previous")),a.length&&$(a).select();else if(48<=a.keyCode&&57>=a.keyCode||65<=a.keyCode&&90>=a.keyCode||96<=a.keyCode&&105>=a.keyCode||39===a.keyCode)a=b.find("input#"+$(this).data("next")),a.length&&$(a).select()})})}})();

