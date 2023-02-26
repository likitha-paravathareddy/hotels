$(document).ready(function(){

    $("#flight2").click(function(){
        var url = 'http://127.0.0.1:5800/flightget';
        $.ajaxSetup({ 
                    headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                 }
                 }); $.post(url,{},function(xhr,status,responseText){
                    //alert(responseText.responseText)
                  dataflight=JSON.parse(responseText.responseText)
                  
                  if(dataflight.path.length==2)
                  {
                    $("#userflight1").append(`<tr>
                    <th>${dataflight.path[0]}</th>
                    <th>${dataflight.path[1]}</th>
                    <th>${''}</th>
                    <th>${dataflight.cost}</th>
                    </tr>`)
                  }
    //         dataflight=JSON.parse(data);
else if(dataflight.path.length==4){
    $("#userflight1").append(`<tr>
    <th>${dataflight.path[0]}</th>
    <th>${dataflight.path[3]}</th>
    <th>${dataflight.path[1]},${dataflight.path[2]}</th>
    <th>${dataflight.cost}</th>
    </tr>`)   
}
else{
    $("#userflight1").append(`<tr>
           <th>${dataflight.path[0]}</th>
           <th>${dataflight.path[2]}</th>
           <th>${dataflight.path[1]}</th>
           <th>${dataflight.cost}</th>
           </tr>`)
}
    document.getElementById("flight1").style.display="inline";
        });
});
});