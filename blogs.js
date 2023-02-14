$(document).ready(function(){
    var url = 'http://127.0.0.1:3007/blogs/reg';
    $.get(url,function(data,status){
        blogs=data;
    console.log(blogs);
//     $("#place").html(places.length);
//     console.log(places)
//     for(i=0;i<places.length;i++)
// {
//     let template=
//     '<div class="tile" style="background-image: url('+places[i].src+');">'+
//     '<div class="textWrapper">'+
//     '<div class="content"><a id='+places[i].data+' href="PLACES .html"><h2>'+places[i].name+'</h2></a></div>'
//     '</div>'+
//   '</div>'
//     $("#parent").append(template)

//     }
});
});
