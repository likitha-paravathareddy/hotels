$(document).ready(function(){
    blogrefname=window.location.hash.substring(1);
    var url = 'http://127.0.0.1:3007/blogs/reg';
    $.get(url,function(data,status){
        blogs=data;
    for(let i=0;i<blogs.length;i++){
        let pr=blogs[i].body.split(' ')[0]
        console.log(pr,blogrefname)
        if(blogrefname==pr){
            blogimgname=localStorage.getItem("blog")
            data2={
                nums:blogs[i].views,
                blogimage:blogimgname
            }
            data2=JSON.stringify(data2)
            var url = 'http://127.0.0.1:3007/blogs/updateviews';
         $.ajaxSetup({ 
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
         });
         $.post(url,data2,function(xhr,status,responseText){
            console.log(responseText.responseText)
         });
            document.getElementById("blogtitle").innerHTML=blogs[i].title
            document.getElementById("author").innerHTML=blogs[i].name
            document.getElementById("blogimg").style.backgroundImage="url('"+blogs[i].img+"')"
            localStorage.setItem("blog",blogs[i].img)
            document.getElementById("blogcont").innerHTML=blogs[i].body
            document.getElementById("likenum").innerHTML=blogs[i].likes
        }
    }
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