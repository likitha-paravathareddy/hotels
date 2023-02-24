$(document).ready(function(){
    placerefname=window.location.hash.substring(1);
    
    console.log(placerefname)
    var url = 'http://127.0.0.1:3007/projects/tourists';
    
    $.get(url,function(data,status){
        place_data=data;
        for(let i=0;i<place_data.length;i++){
            if(place_data[i].name==placerefname){
                console.log(place_data[i])
                document.getElementById("pl-name").innerHTML=placerefname,
                document.getElementById("name").innerHTML=place_data[i].name,
                document.getElementById("img1").style.backgroundImage=place_data[i].img1,
                document.getElementById("tit1").innerHTML=place_data[i].tit1,
                document.getElementById("img2").style.backgroundImage=place_data[i].img2,
                document.getElementById("tit2").innerHTML=place_data[i].tit2,
                console.log(place_data[i].img2)
                document.getElementById("img3").style.backgroundImage=place_data[i].img3,
                console.log(place_data[i].img3)
                document.getElementById("tit3").innerHTML=place_data[i].tit3,
                document.getElementById("para").innerHTML=place_data[i].para,
                document.getElementById("head2").innerHTML=place_data[i].head2,
                document.getElementById("topicimg1").src=place_data[i].topicimg1,
                console.log(place_data[i].topicimg1)
                document.getElementById("topic1").innerHTML=place_data[i].topic1,
                document.getElementById("topicimg2").src=place_data[i].topicimg2,
                document.getElementById("topic2").innerHTML=place_data[i].topic2,
                document.getElementById("topicimg3").src=place_data[i].topicimg3,
                document.getElementById("topic3").innerHTML=place_data[i].topic3,
                document.getElementById("topicimg4").src=place_data[i].topicimg4,
                document.getElementById("topic4").innerHTML=place_data[i].topic4,
                document.getElementById("topicimg5").src=place_data[i].topicimg5,
                document.getElementById("topic5").innerHTML=place_data[i].topic5,
                document.getElementById("topicimg6").src=place_data[i].topicimg6,
                document.getElementById("topic6").innerHTML=place_data[i].topic6,
                document.getElementById("resortimg1").style.backgroundImage=place_data[i].resortimg1,
                document.getElementById("resort1").innerHTML=place_data[i].resort1,
                document.getElementById("hotel1").href="hotelpage.html#"+place_data[i].resort1.split(' ')[0],
                console.log("hotelpage.html#"+place_data[i].resort1.split(' ')[0])
                
                document.getElementById("resortimg2").style.backgroundImage=place_data[i].resortimg2,
                document.getElementById("resort2").innerHTML=place_data[i].resort2,
                document.getElementById("hotel2").href="hotelpage.html#"+place_data[i].resort2.split(' ')[0],
                
                document.getElementById("resortimg3").style.backgroundImage=place_data[i].resortimg3,
                document.getElementById("resort3").innerHTML=place_data[i].resort3,
                document.getElementById("resortimg4").style.backgroundImage=place_data[i].resortimg4,
                document.getElementById("resort4").innerHTML=place_data[i].resort4,
                console.log(place_data[i].resortimg4)
                document.getElementById("resortimg5").style.backgroundImage=place_data[i].resortimg5,
                document.getElementById("resort5").innerHTML=place_data[i].resort5,
                document.getElementById("resortimg6").style.backgroundImage=place_data[i].resortimg6,
                document.getElementById("resort6").innerHTML=place_data[i].resort6,
                document.getElementById("tourimg1").src=place_data[i].tourimg1,
                document.getElementById("tour1").innerHTML=place_data[i].tour1,
                document.getElementById("tourimg2").src=place_data[i].tourimg2,
                document.getElementById("tour2").innerHTML=place_data[i].tour2,
                document.getElementById("tourimg3").src=place_data[i].tourimg3,
                document.getElementById("tour3").innerHTML=place_data[i].tour3,
                document.getElementById("tourimg4").src=place_data[i].tourimg4,
                document.getElementById("tour4").innerHTML=place_data[i].tour4,
                document.getElementById("tourimg5").src=place_data[i].tourimg5,
                document.getElementById("tour5").innerHTML=place_data[i].tour5,
                document.getElementById("tourimg6").src=place_data[i].tourimg6,
                document.getElementById("tour6").innerHTML=place_data[i].tour6
                


            }
        }
});
});
