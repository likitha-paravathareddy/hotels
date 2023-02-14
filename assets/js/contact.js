
$(document).ready(function(){
   $("#submit").click(function(){
      name=$("#name").val();
      email=$("#email").val();
      subject=$("#subject").val();
      message=$("#message").val();
      var data1={
         name:name,
         email:email,
         subject:subject,
         message:message
       };
       data1=JSON.stringify(data1);
       console.log(data1)
      var url = 'http://127.0.0.1:3007/queries/reg';
      $.ajaxSetup({ 
         headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
      });
      $.post(url,data1,function(xhr,status,responseText){
         console.log(responseText);
      });
   });
});
 //xhr.setRequestHeader("content-type","application/json")
         //xhr.send(data1);
  // const xhr1=new XMLHttpRequest();
      // var url = 'http://127.0.0.1:3006/queries';
      // xhr1.open("POST", url);
      // var data1={
      // name:name,
      // email:email,
      // subject:subject,
      // message:message
      // };
      // data1=JSON.stringify(data1)
      // xhr1.setRequestHeader("content-type","application/json")

      // xhr1.send(data1)

/*const submit=document.getElementById("submit")
submit.addEventListener("click",()=>{
    console.log("button clicked")

    name=document.getElementById("name").value
    email=document.getElementById("email").value
    subject=document.getElementById("subject").value
    message=document.getElementById("message").value


    const xhr1=new XMLHttpRequest();
    var url = 'http://127.0.0.1:3006/queries';
    xhr1.open("POST", url);
    var data1={
      name:name,
      email:email,
      subject:subject,
      message:message
    };
    data1=JSON.stringify(data1)
    xhr1.setRequestHeader("content-type","application/json")

    xhr1.send(data1)
    console.log("success")
    console.log(data1)*/
    /*
         if (localStorage.getItem("queries")==null){
            localStorage.setItem("queries",'[]');
         }
          var old_data=JSON.parse(localStorage.getItem("queries"))
          old_data.push(new_data)
          localStorage.setItem("queries",JSON.stringify(old_data));
          console.log(new_data)*/

   //   window.open("contact.html")

//})