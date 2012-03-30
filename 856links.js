var linkText
var qrCode
var theLinks = new Array();


function linkQR(){
    
    if ($("table").is('.bibLinks')){
        $(".bibLinks a").each(function(index) {
            if($(this).parent().html().indexOf("williamwoods") > -1 || $(this).parent().html().indexOf("westminster") > -1 || $(this).parent().html().indexOf("Missouri State Employee") > -1){
              $(this).parent().parent().hide()
            }else {
              theLinks.push($(this).attr("href"));
              linkText = $(this).text();
               $("<input type='radio' name='item' />" + linkText + "<br />").appendTo("#qrChoice")
            }
        });
        
        if ( theLinks.length > 1 ) {
            $("#qrChoice").show();
        }
        
        $("#qrChoice input").change(function () {
            index = $("#qrChoice input").index(this);
            var qrCode = '<img src="http://chart.apis.google.com/chart?chs=100x100&cht=qr&chl=' + theLinks[index] + '">';
            $("#qr").html(qrCode);
        });
        
        var qrCode = '<img src="http://chart.apis.google.com/chart?chs=100x100&cht=qr&chl=' + theLinks[0] + '">';
        $("#qr").html(qrCode);
        $("#qr").show();  
    }else{
    } 
    
}
