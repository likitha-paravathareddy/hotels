// var que=document.getElementById("usertab1")
// var num1=document.getElementById("num1")
$(document).ready(function(){
    var url = 'http://127.0.0.1:3007/services/reg';
    $.get(url,function(data,status){
        query_data=data;
for(i=0;i<query_data.length;i++)
{
    name=query_data[i].name
    service_name=query_data[i].service_name
    email=query_data[i].email
    Date_of_service=query_data[i].Date_of_service
    Number_of_days=query_data[i].Number_of_days

    // str+=`<tr>

    //        <th>${name}</th>
       
    //        <th>${email}</th>
    //        <th>${subject}</th>
    //        <th>${message}</th>
    //        </tr>`;

    $("#usertab2").append(`<tr>
           <th>${name}</th>
           <th>${service_name}</th>
           <th>${email}</th>
           <th>${Date_of_service}</th>
           <th>${Number_of_days}</th>
           </tr>`)

    }
    // console.log(str);
    // $("#usertab1").html(str);
});
});

// var ques=document.getElementById("usertab2")
// const xhr2 = new XMLHttpRequest();
//     var url = 'http://127.0.0.1:3005/services';
//     xhr2.open("GET", url);
//     xhr2.send();
//     xhr2.onload = function () {
//     query_data = JSON.parse(xhr2.responseText);
//     console.log(query_data);
        
// for(i=0;i<query_data.length;i++)
// {
    
//     name=query_data[i].name
//     service_name=query_data[i].service_name
//     email=query_data[i].email
//     Date_of_Service=query_data[i].Date_of_Service
//     Number_of_days=query_data[i].Number_of_days

//     ques.innerHTML+=`<tr>

//            <th>${name}</th>
//            <th>${service_name}</th>
       
//            <th>${email}</th>
//            <th>${Date_of_Service}</th>
//            <th>${Number_of_days}</th>
//            </tr>`;
// }
//     }