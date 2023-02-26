$(document).ready(function(){
    var url = 'http://127.0.0.1:3007/blogs/reg';
    $.get(url,function(data,status){
    blog_data=data;
    for(let i=0;i<6;i++){
        let template='<div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">'+
        '<div class="post-item position-relative h-100">'+

          '<div class="post-img position-relative overflow-hidden">'+
            '<img src='+`${blog_data[i].img}`+ ' class="img-fluid" alt="" width="450"  height="450">'+
            '<span id="number" class="post-date" style="background-color:white;  color:black; font-size:15px;"><b><i class="bi bi-heart-fill" style="font-size:15px; color:red"></i></b>'+blog_data[i].likes+'</span>'+
          '</div>'+

          '<div class="post-content d-flex flex-column">'+

            '<h3 class="post-title">'+blog_data[i].title+'</h3>'+

            '<div class="meta d-flex align-items-center">'+
              '<div class="d-flex align-items-center">'+
                '<i class="bi bi-person"></i> <span class="ps-2">'+blog_data[i].name+'</span>'+
              '</div>'+
              '<span class="px-3 text-black-50">/</span>'+
              '<div class="d-flex align-items-center">'+
                '<i class="bi bi-folder2"></i> <span class="ps-2">'+blog_data[i].body.substring(0,20)+'</span>'+
              '</div>'+
            '</div>'+

            '<hr>'+

            '<a href='+"blogdisplay.html#"+blog_data[i].body.split(' ')[0]+' class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>'+

          '</div>'+ 

        '</div>'+
      '</div>'
      $("#postblog").append(template)

      
    }
    $("#view").click(function(){
        document.getElementById("blog").innerHTML="Our Blog Posts";
        for(let i=6;i<blog_data.length;i++){
            let template='<div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">'+
            '<div class="post-item position-relative h-100">'+
    
              '<div class="post-img position-relative overflow-hidden">'+
                '<img src='+`${blog_data[i].img}`+ ' class="img-fluid" alt="" width="450"  height="450">'+
                '<span id="number" class="post-date" style="background-color:white;  color:black; font-size:15px;"><b><i class="bi bi-heart-fill" style="font-size:15px; color:red"></i></b>'+blog_data[i].likes+'</span>'+
              '</div>'+
    
              '<div class="post-content d-flex flex-column">'+
    
                '<h3 class="post-title">'+blog_data[i].title+'</h3>'+
    
                '<div class="meta d-flex align-items-center">'+
                  '<div class="d-flex align-items-center">'+
                    '<i class="bi bi-person"></i> <span class="ps-2">'+blog_data[i].name+'</span>'+
                  '</div>'+
                  '<span class="px-3 text-black-50">/</span>'+
                  '<div class="d-flex align-items-center">'+
                    '<i class="bi bi-folder2"></i> <span class="ps-2">'+blog_data[i].body.substring(0,20)+'</span>'+
                  '</div>'+
                '</div>'+
    
                '<hr>'+
    
                '<a href='+"blogdisplay.html#"+blog_data[i].body.split(' ')[0]+' class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>'+
    
              '</div>'+
    
            '</div>'+
          '</div>'
          $("#postblog").append(template)
        }
    });


    
});
});
