function modalwindow(isdonate,data){
let html ="<html lang=\"en\"><head><meta charset=\"UTF-8\">"
+"<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\" rel=\"stylesheet\"  crossorigin=\"anonymous\"></head><body class=\"container\">"+
(isdonate? html_donate():"")+
(data ?
`<script>
function copyToClipboard(){ 
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = document.getElementsByTagName("p")[0].innerText;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
</script><h1 id="resault" style="text-align: center;">${lang.h1_2}</h1>
<button class="btn btn-primary" type="button" onclick="copyToClipboard()">Copy to Clipboard</button>
<p class="font-monospace">
 ${data}
</p></body></html>`:"")


var myWindow = window.open("","Result","width=500,height=700,top="+(100)+",left="+(screen.width/2-250));
  myWindow.onload = function(){     
  myWindow.document.write(html);
}
}

function html_donate(){
 
 let html_donate = `
 <h1 style="text-align: center;">${lang.h1}</h1>
 <div>${lang.div}</div>
 ${lang.liqpay}
`;
return html_donate
}


function lang_f(){
  var language = window.navigator ? (window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage) : "ru";
  let e= language.substr(0, 2).toLowerCase();
  if(e!="ru") {
return  lang={
  h1: "Финиш",
div:`Скорее всего мой скрипт закончил работу и я очень надеюсь, что принёс вам пользу.<br>
Эта страница для тех кто хочет меня отблагодарить за потраченное время. Ниже есть результат.`,
h1_2:"Результат",
alert:"Пожалуйста, введите @ в поле сообщения и попробуйте еще раз",
liqpay:`
<div id="liqpay_checkout"></div>
<script>
  window.LiqPayCheckoutCallback = function() {
    LiqPayCheckout.init({
      data: "eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIxIiwiY3VycmVuY3kiOiJVU0QiLCJkZXNjcmlwdGlvbiI6ItCc0ZbQuSDRgtC+0LLQsNGAIiwicHVibGljX2tleSI6Imk1MDA5MDQwNTQxOSIsImxhbmd1YWdlIjoicnUifQ==",
      signature: "PNdV5oIR9ZKe/MBxKOgQfwFbQF8=",
      embedTo: "#liqpay_checkout",
      mode: "embed" // embed || popup,
        }).on("liqpay.callback", function(data){
      console.log(data.status);
      console.log(data);
      }).on("liqpay.ready", function(data){
        // ready
      }).on("liqpay.close", function(data){
        // close
      });
  };
</script>
<script src="//static.liqpay.ua/libjs/checkout.js" async></script>
`};
} else {
return  lang={
  h1: "Finish",
  div:`Most likely my script has finished working and I really hope that it has been useful to you. <br>
This page is for those who want to thank me for the time spent. Below is the result.`,
  h1_2:"Result",
  alert: "Please typing @ in message field and try again",
liqpay:`
<div id="liqpay_checkout"></div>
<script>
  window.LiqPayCheckoutCallback = function() {
    LiqPayCheckout.init({
      data: "eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIxIiwiY3VycmVuY3kiOiJVU0QiLCJkZXNjcmlwdGlvbiI6ItCc0ZbQuSDRgtC+0LLQsNGAIiwicHVibGljX2tleSI6Imk1MDA5MDQwNTQxOSIsImxhbmd1YWdlIjoiZW4ifQ==",
      signature: "BtuvvO4XeiTDU/YJENh4T9PqTtw=",
      embedTo: "#liqpay_checkout",
      mode: "embed" // embed || popup,
        }).on("liqpay.callback", function(data){
      console.log(data.status);
      console.log(data);
      }).on("liqpay.ready", function(data){
        // ready
      }).on("liqpay.close", function(data){
        // close
    });
  };
</script>
<script src="//static.liqpay.ua/libjs/checkout.js" async></script>    
`};
}  
}