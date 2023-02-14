

$(document).ready(function(){
    $("#signup").click(function(){
        name=$("#firstname").val();
        email=$("#email").val();
        password=$("#password").val();
        cnfpassword=$("#cnfpassword").val();
        address=$("#address").val();
        phnnumber=$("#phn").val();
        image=$("#photo").val();
        if (password!=cnfpassword)
        {
            alert("password and confirm password are not equal");
            window.open("signuppage.html");
            return;
        }
        const new_data={name:name,password:password,mail:email,mobileNumber:phnnumber,address:address,image:image}
        
         data1=JSON.stringify(new_data)
         var url = 'http://127.0.0.1:3007/users/reg';
       $.ajaxSetup({ 
          headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
       }
       });
       $.post(url,data1,function(xhr,status,responseText){
          if(responseText.responseText=="1")
          {

            alert("user already exists");
            window.open("signuppage.html")
            return;
          }
          else{
          localStorage.setItem("currentLoggedUser",email);
          window.open("index.html");
          }
       });
       
    });

});


//     const signup=document.getElementById("signup")
//         console.log(signup)
//         signup.addEventListener("click",()=>{
//         console.log("buttonclicked")
//         const name=document.getElementById("firstname").value
//         console.log(name)
//         const email=document.getElementById("email").value
//         console.log(email)
//         const username=document.getElementById("username").value
//         console.log(username)
//         const password=document.getElementById("password").value
//         console.log(password)
//         const cnfpassword=document.getElementById("cnfpassword").value
//         console.log(cnfpassword)
//         const address=document.getElementById("address").value
//         console.log(address)
//         if(email===null||name==null||username==null||password==null||cnfpassword==null||address==null){
//             if(email.size()==0){
//                 document.getElementById("email").value="mandetory"
    
//             }
//             if(name==null){
//                 document.getElementById("firstname").value="mandetory"
    
//             }
//             if(username==null){
//                 document.getElementById("username").value="mandetory"
    
//             }
//             if(password==null){
//                 document.getElementById("password").value="mandetory"
    
//             }
//             if(cnfpassword==null){
//                 document.getElementById("cnfpassword").value="mandetory"
    
//             }
//             if(address==null){
//                 document.getElementById("address").value="mandetory"
    
//             }
    
    
//         }
//        else if(password!==cnfpassword){
//         alert("passwords are not matched")
//         document.getElementById("password").value="";
//         document.getElementById("cnfpassword").value=""
//         document.getElementById("password").placeholder="passwords not matched"
//         document.getElementById("cnfpassword").placeholder="passwords not matched"
//        }
//    else if(exists(email)){
//         document.getElementById("email").value="already exist"
//         alert("user already exists please login")
//         window.open("loginpage2.html")
//       }
    
//        else{
//          console.log("enter into else loop")
//          const new_data={name:name,password:password,mail:email,username:username,address:address}
//          data1=JSON.stringify(new_data)
//          var url = 'http://127.0.0.1:3007/users';
//        $.ajaxSetup({ 
//           headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//        }
//        });
//        $.post(url,data1,function(xhr,status,responseText){
//           console.log(responseText);
//        });
//           window.open("home1.html")
//        }
    
//         })
    
        
    
    
  
    
    