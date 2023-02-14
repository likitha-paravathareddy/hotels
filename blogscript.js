$(document).ready(function(){
    $("#blogsubmit").click(function(){
     blogtitle = $("#blogtitle").val();
     authname = $("#authname").val();
     blogbody = $("#blogbody").val();
     var data1={
        blogtitle: blogtitle,
        authname: authname,
        blogbody: blogbody
      };
      data1=JSON.stringify(data1);
     var url = 'http://127.0.0.1:3007/blogs/reg';
     $.ajaxSetup({ 
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
     }
     });
    $.post(url,data1,function(xhr,status,responseText){

        if(responseText.responseText=="1")
        {
          
          alert("booking request already exists sorry for inconvinience we will get back to you soon");
          return;
        }
        window.open("index.html")
     });
    });
});