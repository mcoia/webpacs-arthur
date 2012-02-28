function linkQR(){
  
$(".bibLinks a").each(function() {
    var qrlink = $(this).attr("href");
    if( qrlink.indexOf("ccis") != -1 ) {
      qrCode = '<img src="http://chart.apis.google.com/chart?chs=125x125&cht=qr&chl=' + qrlink + '">';
      $("#qr").html(qrCode);
    }else{
    }
});


      
}
