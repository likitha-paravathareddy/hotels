$(document).ready(function(){
    $("#sent").click(function(){
      if(localStorage.getItem("currentLoggedUser")==null)
      {
         window.open("login.html")
         return;
      }
        name=$("#form6Example1").val();
     no_of_people=$("#form6Example2").val();
     dropsel=$("dropsel").val();
     from_date=$("#form6Example3").val();
     to_date=$("#form6Example4").val();
     email=$("#form6Example5").val();
     var data1={
        hotel_name:name,
        no_of_people:no_of_people,
        dropsel:dropsel,
        from_date:from_date,
        to_date:to_date,
        email:email
        
      };
      data1=JSON.stringify(data1);
     var url = 'http://127.0.0.1:3007/hotels/reg';
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