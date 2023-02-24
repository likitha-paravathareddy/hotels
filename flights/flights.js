$(document).ready(function(){
    $("#flight").click(function(){
        var from=$("#fromplace").val();
        var to=$("#toplace").val();
        var dat=$("#dates").val()
//      name=$("#imgname").val();
//      data=$("#imgdata").val();
     var data5={
        from:from,
        to:to,
        dat:dat
      };
      data5=JSON.stringify(data5);
      //alert(data5)
      // alert(data1);
     var url = 'http://127.0.0.1:5404/flights';
     $.ajaxSetup({ 
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
     }
     });
     $.post(url,data5,function(xhr,status,responseText){
     });
    })
})