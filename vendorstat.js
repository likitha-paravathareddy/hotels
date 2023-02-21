$(document).ready(function(){
    var url = 'http://127.0.0.1:3007/vendors/reg';
    $.get(url,function(data,status){
        user_data=data;
// let str="";

    // console.log(str);
    // $("#usertab1").html(str);
    // $("#table2").dataTable();

    for(i=0;i<user_data.length;i++)
{
    
        hotel_name=user_data[i].name,
        image=user_data[i].img.substring(11,user_data[i].img.length),
        status=user_data[i].status

        
        $("#user9").append(`<tr>
        <th>${i+1}</th>
               <th>${hotel_name}</th>
               <th>${image}</th>
               <th>${status}</th>
               </tr>`)
    
}


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

