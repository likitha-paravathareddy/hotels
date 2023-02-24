$(document).ready(function(){
    $("#sent").click(function(){
var urls="http://127.0.0.1:3005/validate"

$.ajaxSetup({ 
   headers:{
   'Content-Type': 'application/json',
   'Accept': 'application/json',
   'Authorization': localStorage.getItem("token")
   }
        }); 

        $.post(urls,function(xhr,status,responseText){
         alert(responseText.responseText)
        });
    });
});