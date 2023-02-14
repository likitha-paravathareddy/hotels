$(document).ready(function(){
    const mail=localStorage.getItem("currentLoggedUser")
    console.log(mail)
    var url = 'http://127.0.0.1:3007/hotels/reg';
    $.get(url,function(data,status){
        user_data=data;
// let str="";

    // console.log(str);
    // $("#usertab1").html(str);
    // $("#table2").dataTable();

    for(i=0;i<user_data.length;i++)
{
    if(user_data[i].email==mail){
        hotel_name=user_data[i].hotel_name,
            no_of_days=user_data[i].no_of_people,
            dropsel=user_data[i].dropsel,
            from_date=user_data[i].from_date.substring(0,10),
            to_date=user_data[i].to_date.substring(0,10),
            email=user_data[i].email,
            status=user_data[i].status
    
        $("#usertab8").append(`<tr>
               <th>${hotel_name}</th>
               <th>${no_of_days}</th>
               <th>${from_date}</th>
               <th>${to_date}</th>
               <th>${email}</th>
               <th>${status}</th>
               </tr>`)
    }
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

