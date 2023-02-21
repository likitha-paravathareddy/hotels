$(document).ready(function(){
    hotelrefname=window.location.hash.substring(1);
    
    console.log(hotelrefname)
    var url = 'http://127.0.0.1:3007/pages/reg';
    
    $.get(url,function(data,status){
        pages_data=data;
        for(let i=0;i<pages_data.length;i++){
            console.log(pages_data[i])
            if(pages_data[i].name==hotelrefname){
                document.getElementById("bread1").innerHTML=pages_data[i].bread1,
                document.getElementById("bread2").innerHTML=pages_data[i].bread2,
                document.getElementById("hotelimg1").src=pages_data[i].hotelimg1,
                document.getElementById("hotelimg2").src=pages_data[i].hotelimg2,
                document.getElementById("hotelimg3").src=pages_data[i].hotelimg3,
                
                document.getElementById("hoteldata").innerHTML=pages_data[i].hoteldata
            }
        }
});
});
