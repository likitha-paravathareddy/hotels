$(document).ready(function(){
    var url = 'http://127.0.0.1:3007/places/reg';
    $.get(url,function(data,status){
        places=data;
    console.log(places);
    $("#place").html(places.length);
    console.log(places)
    for(i=0;i<places.length;i++)
{
    let template=
    '<div class="tile" style="background-image: url('+places[i].src+');">'+
    '<div class="textWrapper">'+
    '<div class="content"><a id='+places[i].data+' href='+"projects3.html#"+places[i].data+'><h2>'+places[i].name+'</h2></a></div>'
    '</div>'+
  '</div>'
    $("#parent").append(template)

    }
});
});
