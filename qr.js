var qrlink
var linkText
var qrCode

function linkQR(){
  
function create_qr_code(index) {
    qrlink = $(".bibLinks a:eq(" + index + ")").attr("href");
}
  
$(".bibLinks a").each(function(index) {
    create_qr_code(index);
    linkText = $(this).text()
    $("<input type='radio' name='item' />" + linkText + "<br />").appendTo("#qrChoice")
}); 

$("#qrChoice input").change(function () {
    index = $("#qrChoice input").index(this);
    create_qr_code(index);
    var qrCode = '<img src="http://chart.apis.google.com/chart?chs=125x125&cht=qr&chl=' + qrlink + '">';
    $("#qr").html(qrCode);
});

var qrCode = '<img src="http://chart.apis.google.com/chart?chs=125x125&cht=qr&chl=' + qrlink + '">';
$("#qr").html(qrCode);
      
}
