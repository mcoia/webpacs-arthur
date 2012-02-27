function linkQR(){
    
if ($("#cc856")) {
  var qrlink =  $("#cc856").attr("href");
}else{
  var qrlink 
}

qrCode = '<img src="http://chart.apis.google.com/chart?chs=125x125&cht=qr&chl=' + qrlink + '">'
$("#qr").html(qrCode)
}
