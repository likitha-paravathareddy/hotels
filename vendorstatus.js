
$(document).ready(function(){
    var url = 'http://127.0.0.1:3007/vendors/reg';
    $.get(url,function(data,status){
        vendor_data=data;

for(i=0;i<vendor_data.length;i++)
{
    // console.log("hii....");
    // alert(travel_data[i].hotel_name)
    //alert(vendor_data[i].name)
    vendor_name=vendor_data[i].name
    place=vendor_data[i].place
    src=vendor_data[i].img
    if(vendor_data[i].status=="Approved")
            {
             $("#usertab12").append(`<tr>
            <th style="padding:15px;">${vendor_name}</th>
            <th>${src}</th>
      
            <th><div onclick="reject(vendor_name)" style="background:red;padding:10px;border-radius:10px;cursor:pointer;display:inline">Reject</div></th>
            </tr>`)
            }
            if(vendor_data[i].status=="Rejected")
            {
             $("#usertab12").append(`<tr>
            <th style="padding:15px;">${vendor_name}</th>
            <th>${src}</th>
    
            <th><div onclick="accept(vendor_name)" style="background:green;padding:10px;border-radius:10px;cursor:pointer;display:inline">Accept</div></th>
            </tr>`)
            }
            if (vendor_data[i].status=="Approved" || vendor_data[i].status=="Rejected")
            {
                
                continue;
                
            }
    
    $("#usertab7").append(`<tr>
           <th style="padding:15px">${vendor_name}</th>
           <th>${src}</th>
           <th><div onclick="accept(vendor_name)" style="background:green;padding:10px;margin-left:5px;margin-right:5px;border-radius:10px;cursor:pointer;display:inline">Accept</div><div onclick="reject(hotel_name)" style="background:red;padding:10px;border-radius:10px;cursor:pointer;display:inline">Reject</div></th>
           </tr>`)

    }
});
});

function accept(vendor_name) {
    console.log(vendor_name)
    var url = 'http://127.0.0.1:3007/vendors/updates'
    // $.post('http://127.0.0.1:3007/hotels/update',{email:email},(data,status)=>{
    //     alert(responseText.responseText)
    // })
    $.ajaxSetup({
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    $.post(url, JSON.stringify({ vendor_name: vendor_name }), function (xhr, status, responseText) {
        alert(responseText.responseText)
    });
};

function reject(vendor_name) {

    // $.post('http://127.0.0.1:3007/hotels/update',{email:email},(data,status)=>{
    //     alert(responseText.responseText)
    // })
    $.ajax({ type: "post", url: "http://127.0.0.1:3007/vendors/updatesreg", contentType: "application/json", data: JSON.stringify({vendor_name:vendor_name}), xhrFields: { withCredentials: false, }, headers: {}, success: function (data) { console.log("Success"); console.log(data); }, error: function () { console.log("We are sorry but our servers are having an issue right now"); }, });

 

};




/*var que=document.getElementById("usertab1")
var num1=document.getElementById("num1")

   
   const xhr = new XMLHttpRequest();
    var url = 'http://127.0.0.1:3006/queries';
    xhr.open("GET", url);
     xhr.send();
    var data="empty";
    xhr.onload = function () {
        travel_data = JSON.parse(xhr.responseText);

        num1.innerHTML=travel_data.length
for(i=0;i<travel_data.length;i++)
{
    name=travel_data[i].name
    email=travel_data[i].email
    subject=travel_data[i].subject
    message=travel_data[i].message

    que.innerHTML+=`<tr>

           <th>${name}</th>
       
           <th>${email}</th>
           <th>${subject}</th>
           <th>${message}</th>
           </tr>`;
}
    }*/

