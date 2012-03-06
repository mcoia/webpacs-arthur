var qrlink
var linkText
var qrCode
var theLinks = new Array();


function linkQR(){
  
$(".bibLinks a").each(function(index) {
    if($(this).attr("href").indexOf("williamwoods")  == -1){
      theLinks.push($(this).attr("href"));
      linkText = $(this).text();
       $("<input type='radio' name='item' />" + linkText + "<br />").appendTo("#qrChoice")
    }else {}
}); 

$("#qrChoice input").change(function () {
    index = $("#qrChoice input").index(this);
    var qrCode = '<img src="http://chart.apis.google.com/chart?chs=125x125&cht=qr&chl=' + theLinks[index] + '">';
    $("#qr").html(qrCode);
});

var qrCode = '<img src="http://chart.apis.google.com/chart?chs=125x125&cht=qr&chl=' + theLinks[0] + '">';
$("#qr").html(qrCode);
      
}
