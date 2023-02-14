
$(document).ready(function(){
    var url = 'http://127.0.0.1:3007/users/reg';
    $.get(url,function(data,status){
        user_data=data;
        console.log(user_data[1])
        $("#num").text(user_data.length)
// let str="";
for(i=0;i<user_data.length;i++)
{
    // console.log("hii....");
    name=user_data[i].name
    password=user_data[i].password
    mail=user_data[i].mail
    phnNumber=user_data[i].mobileNumber
    address=user_data[i].address

    $("#usertab").append(`<tr>
           <th>${name}</th>
           <th>${password}</th>
           <th>${mail}</th>
           <th>${phnNumber}</th>
           <th>${address}</th>
           </tr>`)
    }
    // console.log(str);
    // $("#usertab1").html(str);
    // $("#table2").dataTable();
});
});



// var tab=document.getElementById("usertab");
// var num=document.getElementById("num")
// function run() {
//     const xhr = new XMLHttpRequest();
//     var url = 'http://127.0.0.1:3007/users';
//     xhr.open("GET", url);
//      xhr.send();
//     xhr.onload = function () {
//         data = JSON.parse(xhr.responseText);
//         user_data=data.data
//         num.innerHTML=user_data.length;
//         for(i=0;i<user_data.length;i++)
//         {
//            tab.innerHTML+=adduser(user_data[i].id,user_data[i].email,user_data[i].first_name,user_data[i].last_name);
//         }
//     }


// }
// run();
//for( persons in data){
  //  console.log(persons)
    //document.getElementById("usertab").innerHTML="<tr><td>"+obj.name+"</td><td>"+obj.mail+"</td><td>"+obj.username+"</td><td>"+obj.address+"</td><td class='text-end'><a href='' class='btn btn-outline-info '><i class='fas fa-pen'></i></a></td></tr>"
//}

// function adduser(id,email,firstname,lastname){
//     return `<tr>

//     <th>${id}</th>

//     <th>${email}</th>
//     <th>${firstname}</th>
//     <th>${lastname}</th>
//     </tr>`;
// }

// function postUser(){
//     const xhr1=new XMLHttpRequest();
//     var url = 'https://reqres.in/api/users';
//     xhr1.open("GET", url);
//      xhr1.send();
//     var data="empty";
//     xhr1.onload = function () {
//         user_data = JSON.parse(xhr.responseText);
//     }
//     xhr1.open("POST", 'http://127.0.0.1:3007/users');

//     data1=JSON.stringify(user_data)
//     xhr1.setRequestHeader("content-type","application/json")

//     xhr1.send(data1)
        
//     }

