var aiptag=aiptag||{};aiptag.consented=true;var date=new Date();date.setTime(date.getTime()+(1000*24*60*60*1000));var expires="; expires="+date.toGMTString();function cookiePolicyWarning(text,linkText,linkUrl){var cwh=document.createElement('div');cwh.setAttribute('style','font-size:14px;z-index:9999999;width: 100%;padding: 10px 60px;box-sizing: border-box;color: #fff;background-color:rgba(0, 0, 0, 0.7);position: fixed;bottom: 0px;left: 0px;text-align: center;font-family: Tahoma;');cwh.setAttribute('id','cookiePolicyw');cwh.innerHTML=text;var cwh_a=document.createElement('a');cwh_a.setAttribute('style','color:#fff;font-size:inherit;font-weight:bold;');cwh_a.setAttribute('href',linkUrl);cwh_a.innerHTML=linkText;var cwh_cl=document.createElement('div');cwh_cl.setAttribute('style','position:absolute;right: 20px;top:50%;width:24px;height: 24px;margin-top:-12px;box-sizing: border-box;border:#fff solid 2px;border-radius: 4px;cursor:pointer;font-size:16px;');cwh_cl.setAttribute('onclick','document.getElementById("cookiePolicyw").style.display = \'none\';document.cookie = \'cookiePolicy=closed'+expires+'; path=/; domain='+document.location.host+'\';');cwh_cl.innerHTML='X';cwh.appendChild(cwh_a);cwh.appendChild(cwh_cl);document.body.appendChild(cwh);}var cookiePolicyGetCookie=function(name){var pair=document.cookie.match(new RegExp(name+'=([^;]+)'));return!!pair?pair[1]:null;};if(cookiePolicyGetCookie('cookiePolicy')!=="closed"){cookiePolicyWarning('Sitemizden en iyi şekilde faydalanabilmeniz için tanımlama bilgileri kullanılmaktadır.Bu siteye giriş yaparak tanımlama bilgileri kullanımını kabul etmiş sayılıyorsunuz. ','Daha fazla bilgi için tıklayın','/cerez-politikasi');}