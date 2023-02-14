

const persons=[]


//signup part

// //var exists=(email)=>{
//     //console.log(email)
//     if(localStorage.getItem(email))
//     return false;
//    }

// const signup=document.getElementById("sign up")
// signup.addEventListener("click", ()=>{
//     document.getElementsByClassName('signupFrm')[0].style.display=''
//     const signup=document.getElementById('signup')
//     signup.addEventListener("click",()=>{

//         const name=document.getElementById("firstname").value
//     const email=document.getElementById("mail").value
//     const username=document.getElementById('username').value
//     const password=document.getElementById("password").value
//     const cnfpassword=document.getElementById("cnfpassword").value
//     const address=document.getElementById("address").value
//     //console.log(email)
//     if(email===null||name==null||username==null||password==null||cnfpassword==null||address==null){
//         if(email.size()==0){
//             document.getElementById("mail").value="mandetory"

//         }
//         if(name==null){
//             document.getElementById("firstname").value="mandetory"

//         }
//         if(username==null){
//             document.getElementById("username").value="mandetory"

//         }
//         if(password==null){
//             document.getElementById("password").value="mandetory"

//         }
//         if(cnfpassword==null){
//             document.getElementById("cnfpassword").value="mandetory"

//         }
//         if(address==null){
//             document.getElementById("address").value="mandetory"

//         }


//     }
//    else if(password!==cnfpassword){
//     document.getElementById("password").value="";
//     document.getElementById("cnfpassword").value=""

//     document.getElementById("password").placeholder="passwords not matched"
//     document.getElementById("cnfpassword").placeholder="passwords not matched"
//    }
//    else if(exists(email)){
//     document.getElementById("mail").value="already exist"
//    }

//    else{
//       const new_data={name:name,password:password,mail:email,username:username,address:address,islogged:false}
//       persons.push(new_data)
//       localStorage.setItem(email,JSON.stringify(new_data))
//       //console.log(persons)


//       document.getElementsByClassName('signupFrm')[0].style.display='none'

    

//    }

//     })

    



// })







//login part


//const submit=document.getElementById('submit')
$(document).ready(function(){
    $("#submit").click(function(){
        const mailId=$("#typeEmailX").val();
        const passwd=$("#typePasswordX").val();
        if (mailId=="reddylikitha201@gmail.com"){
            if (passwd=="12345")
            {
                localStorage.setItem("currentLoggedUser",mailId);
                window.open("index.html");
            }
        }
        if (mailId=="saloni@gmail.com"){
            if (passwd=="12345")
            {
                localStorage.setItem("currentLoggedUser",mailId);
                window.open("index.html");
            }
        }
        data1={
            mail:mailId,
            passwd:passwd
        }
        data1=JSON.stringify(data1)
        //alert(data1)
        var url = 'http://127.0.0.1:3007/users/login';
        $.ajaxSetup({ 
           headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
        }
        });
        $.post(url,data1,function(xhr,status,responseText){
            // alert(responseText.responseText);
           if(responseText.responseText=="1")
           {
            localStorage.setItem("currentLoggedUser",mailId);
            window.open("index.html");
           }
           else if(responseText.responseText=="0")
           {
            alert("Invalid username or password");
           }   
        });
        // $.get(url,function(data,status){
        //     console.log(data);
        // });
        // const obj=JSON.parse(localStorage.getItem(mailId));
        // if(obj==null){
        //     alert("invalid login");
        // }
        // if(obj.mail===mailId){

        //     if(obj.password===passwd){
        //         console.log("valid")
        //         obj.islogged=true;
        //         localStorage.setItem(mailId,JSON.stringify(obj))
        //         window.open("home1.html")
        //     }
        //     else{
        //         alert("invalid username or password");
        //         // document.getElementById("typeEmailX").place
        
        //     }
        // }
        // else{
        //     alert("Invalid login");
        // }
        
    });
});
// submit.addEventListener("click",()=>{
//     const mailId=document.getElementById("typeEmailX").value


// const passwd=document.getElementById("typePasswordX").value
// console.log(mailId)
// console.log(passwd)
// console.log("button clicked")
// console.log(mailId)
// if (mailId=="reddylikitha201@gmail.com"){
//     if (passwd=="12345")
//     {
//         window.open("home2.html")
//     }
// }
// const obj=JSON.parse(localStorage.getItem(mailId))
// if(obj==null){
//     document.getElementById("typeEmailX").value=""
//     document.getElementById("typePasswordX").value=""
//     document.getElementById("typeEmailX").placeholder="invalid"
//     document.getElementById("typePasswordX").placeholder="invalid"
// }
// console.log(obj)
// if(obj.mail===mailId){

//     if(obj.password===passwd){
//         console.log("valid")
//         obj.islogged=true;
//         localStorage.setItem(mailId,JSON.stringify(obj))
//         window.open("home1.html")
//     }
//     else{
//         document.getElementById("typeEmailX").value=""
//         document.getElementById("typeEmailX").placeholder="invalid"
//         document.getElementById("typePasswordX").value=""
//         document.getElementById("typePasswordX").placeholder="invalid"

//         // document.getElementById("typeEmailX").place

//     }
// }
// else{
//     document.getElementById("typeEmailX").value=""
//     document.getElementById("typePasswordX").value=""
//     document.getElementById("typeEmailX").placeholder="invalid"
//     document.getElementById("typePasswordX").placeholder="invalid"

//     // document.getElementById("typeEmailX").place


// }

// })



