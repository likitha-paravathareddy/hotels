$(document).ready(function(){
  mail=localStorage.getItem("currentLoggedUser")
    var url = 'http://127.0.0.1:3007/users/reg';
    $.get(url, function (data, status) {
      user_data=data
      for (let i = 0; i < user_data.length; i++){
        if(user_data[i].mail==mail){
          console.log(user_data[i])
          document.getElementById("name").value=user_data[i].name,
          document.getElementById("email").value=mail
        }
      }     
    })
   
    
  $("#send").click(function(){
     name=$("#name").val();
     service_name=$("#service_name").val();
     email=$("#email").val();
     Date_of_service=$("#service").val();
     Number_of_days=$("#days").val();
     var data1={
        name:name,
        service_name:service_name,
        email:email,
        Date_of_service:Date_of_service,
        Number_of_days:Number_of_days
      };
      data1=JSON.stringify(data1);
     var url = 'http://127.0.0.1:3007/services/reg';
     $.ajaxSetup({ 
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
     }
     });
     $.post(url,data1,function(xhr,status,responseText){

        if(responseText.responseText=="1")
        {
          console.log("service already exists")
          alert("service request already exists sorry for inconvinience we will get back to you soon");
          return;
        }
     });
  });
});


/*const send=document.getElementById("send")
send.addEventListener("click",()=>{
    console.log("button clicked")
    name=document.getElementById("name").value
    service_name=document.getElementById("service_name").value
    email=document.getElementById("email").value
    Date_of_Service=document.getElementById("service").value
    Number_of_days=document.getElementById("days").value

    const xhr1=new XMLHttpRequest();
    var url = 'http://127.0.0.1:3005/services';
    xhr1.open("POST", url);
    var data1={
      name:name,
      service_name:service_name,
      email:email,
      Date_of_Service:Date_of_Service,
      Number_of_days:Number_of_days
    };
    data1=JSON.stringify(data1)
    xhr1.setRequestHeader("content-type","application/json")

    xhr1.send(data1)
    console.log("success")
    console.log(data1)
})*/