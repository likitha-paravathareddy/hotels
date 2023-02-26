$(document).ready(function(){
  placename=window.location.hash.substring(1);
  console.log(placename)
    var url = 'http://127.0.0.1:3007/vendors/reg';
    $.get(url,function(data,status){
        vendors=data;
        console.log(vendors)
    
    for(let i=0;i<vendors.length;i++)
    {
      if(vendors[i].status=="Approved"){
        if(vendors[i].place==placename){
        
    let template=
    '   <div class="tile filter-hill" id="resortimg1" style="background-image: url('+vendors[i].img+');">'+
    '<div class="textWrapper">'+
      '<div class="content"><a href="hotels.html"><h3 id="resort1">'+vendors[i].name+'</h3></a></div>'+
    '</div>'+
  '</div>'
    $("#search").append(template)
    }
  }
  }

});
});

//     


