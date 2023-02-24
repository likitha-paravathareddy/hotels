$(document).ready(function(){
    var url = 'http://127.0.0.1:3007/blogs/reg';
    $.get(url,function(data,status){
        blogs_data=data;
        blogprofname=localStorage.getItem("Name");
var view=0
var like=0
var post=0
for(i=0;i<blogs_data.length;i++)
{
    
    if(blogs_data[i].name==blogprofname)
    {
        post=post+1
        view=view+blogs_data[i].views
        like=like+blogs_data[i].likes
        var data3={
            name:blogs_data[i].name,
            tit:blogs_data[i].title,
            views:view,
            likes:like
          };
          data3=JSON.stringify(data3);
         var url = 'http://127.0.0.1:3000/excel';
         $.ajaxSetup({ 
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
         });
         $.post(url,data3,function(xhr,status,responseText){
            console.log(responseText);
         });
        let temp='  <div class="card">'+
        '<div class="card-body">'+
            '<h6 id="tit">'+blogs_data[i].title+'</h6>'+
          '<p id="blogdat">'+blogs_data[i].body.substring(0,400) +'<span>...</span></p>'+
          '<h6>Number of Views: '+blogs_data[i].likes+'</h6>'+
          '<h6>Number of Likes: '+blogs_data[i].views+'</h6>'+
        '</div>'+
      '</div>'+
      '<div>'+
        '<p>'+
            
        '</p>'+
    '</div>';
    $("#blogs").append(temp)
    }
}
var profarr=JSON.parse(localStorage.getItem(localStorage.getItem("currentLoggedUser")))
for(i=0;i<profarr.length;i++)
{
    for(let j=0;j<blogs_data.length;j++){
    if(blogs_data[j].img==profarr[i])
    {
        let temple='  <div class="card">'+
        '<div class="card-body">'+
            '<h6 id="tit">'+blogs_data[i].title+'</h6>'+
          '<p id="blogdat">'+blogs_data[i].body.substring(0,300) +'<span>...</span></p>'+
          
        '</div>'+
      '</div>'+
      '<div>'+
        '<p>'+
            
        '</p>'+
    '</div>';
    $("#likedposts").append(temple)
    }
}
}
document.getElementById("numposts").innerHTML=post
document.getElementById("avglikes").innerHTML=Math.ceil(parseInt(like)/parseInt(post))
document.getElementById("avgviews").innerHTML=Math.ceil(parseInt(view)/parseInt(post))
 
});
$("#trans").click(function(){
    alert("click")
    var url = 'http://127.0.0.1:3000/sheet1';
    $.get(url,function(data,status){
        
    });
})
});





