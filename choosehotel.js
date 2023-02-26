$(document).ready(function(){
    $("#filter").click(function(){
        document.getElementById("Kaldan").style.display="none";
        document.getElementById("Sherlock").style.display="none";
        document.getElementById("Club").style.display="none";
        document.getElementById("ITC").style.display="none";
        document.getElementById("Radisson").style.display="none";
        document.getElementById("Taj").style.display="none";
        document.getElementById("Samro").style.display="none";
        document.getElementById("La").style.display="none";
        document.getElementById("Rambagh").style.display="none";
        document.getElementById("Rajvilas").style.display="none";
        document.getElementById("Mariott").style.display="none";
        document.getElementById("Regis").style.display="none";
        var choice=$("#customRange2").val();
        var nostar=document.getElementById("flexCheckNorating");
        var star5=document.getElementById("flexCheck");
        var star3=document.getElementById("flexCheckDefault");
        var star4=document.getElementById("flexCheckCheckedDefault")
        var foodveg=document.getElementById("flexRadioDefault1");
        var foodnon=document.getElementById("flexRadioDefault2");
        var swim=document.getElementById("flexCheckSwimming");
        var villas=document.getElementById("flexCheckCheckVillas");
        var outdoor=document.getElementById("flexCheckOutdoor");
        var jungle=document.getElementById("flexCheckJungle");
        var luxury=document.getElementById("flexCheckLuxury");
        var sea=document.getElementById("flexCheckSea");
        const amenity=[];
        if (swim.checked==true)
        {
            amenity.push("pool")
        }
        if(villas.checked==true){
            amenity.push("villa")
        }
        if(outdoor.checked==true){
            amenity.push("outdoor")
        }
        if(jungle.checked==true){
            amenity.push("jungle")
        }
        if(luxury.checked==true){
            amenity.push("luxury")
        }
        if(sea.checked==true)
        {
            amenity.push("sea")
        }
        url="http://127.0.0.1:5600/choosehotel"
        $.get(url,function(data,status){
            hotels_data=JSON.parse(data);
            var hotelids=[];
            if(choice=="1") {
            for(let i=0;i<hotels_data.length;i++){
                if(hotels_data[i].price=="1")
                {
                    console.log(choice)
                    document.getElementById(hotels_data[i].id).style.display="block";
                }
                else{
                    document.getElementById(hotels_data[i].id).style.display="none";
                }
            }
        }
        if(choice=="2") {
            console.log(choice)
            for(let i=0;i<hotels_data.length;i++){
                if(hotels_data[i].price=="2")
                {
                    
                    document.getElementById(hotels_data[i].id).style.display="block";
                }
                else{
                    document.getElementById(hotels_data[i].id).style.display="none";
                }
            }
        }
        if(choice=="3") {
            console.log(choice)
            for(let i=0;i<hotels_data.length;i++){
                if(hotels_data[i].price=="3")
                {
                    document.getElementById(hotels_data[i].id).style.display="block";
                }
                else{
                    document.getElementById(hotels_data[i].id).style.display="none";
                }
            }
        }
        if(nostar.checked==true)
        {
            for(let i=0;i<hotels_data.length;i++){
                if(hotels_data[i].stars=="0")
                {
                    document.getElementById(hotels_data[i].id).style.display="block";
                }
                else{
                    document.getElementById(hotels_data[i].id).style.display="none";
                }
            }
        }
        if(star5.checked==true)
        {
            for(let i=0;i<hotels_data.length;i++){
                if(hotels_data[i].stars=="5")
                {
                    document.getElementById(hotels_data[i].id).style.display="block";
                }
                else{
                    document.getElementById(hotels_data[i].id).style.display="none";
                }
            }
        }
        if(star4.checked==true)
        {
            for(let i=0;i<hotels_data.length;i++){
                if(hotels_data[i].stars=="4")
                {
                    document.getElementById(hotels_data[i].id).style.display="block";
                }
                else{
                    document.getElementById(hotels_data[i].id).style.display="none";
                }
            }
        }
        if(star3.checked==true)
        {
            for(let i=0;i<hotels_data.length;i++){
                if(hotels_data[i].stars=="3")
                {
                    document.getElementById(hotels_data[i].id).style.display="block";
                }
                else{
                    document.getElementById(hotels_data[i].id).style.display="none";
                }
            }
        }
        if(foodveg.checked==true){
            for(let i=0;i<hotels_data.length;i++){
                if(hotels_data[i].food=="veg")
                {
                    document.getElementById(hotels_data[i].id).style.display="block";
                }
                else{
                    document.getElementById(hotels_data[i].id).style.display="none";
                }
            }
        }
        if(foodnon.checked==true){
            for(let i=0;i<hotels_data.length;i++){
                if(hotels_data[i].food=="nonveg")
                {
                    document.getElementById(hotels_data[i].id).style.display="block";
                }
                else{
                    document.getElementById(hotels_data[i].id).style.display="none";
                }
            }
        }
        for(let i=0;i<hotels_data.length;i++)
        {
            var f=0;
          for(let j=0;j<amenity.length;j++)
          {
            if(hotels_data[i].amenities.indexOf(amenity[j])==-1){
                f=1;
                break;
            }
          }
          if(f==0)
          {
            
            document.getElementById(hotels_data[i].id).style.display="block";
          }
          else{
            document.getElementById(hotels_data[i].id).style.display="none";
        }
        }
   
        
          
    });
    });
})