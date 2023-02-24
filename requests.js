



$(document).ready(function () {
    var url = 'http://127.0.0.1:3007/hotels/reg';
    // let template='<label for="c1"><input type="checkbox"name="color"value="approve"id="c1">Approve</label>'+
    // '<label for="c2">'
    $.get(url, function (data, status) {
        travel_data = data;

        for (i = 0; i < travel_data.length; i++) {
            // console.log("hii....")
            if(travel_data[i].hotel_name=='')
            {
                console.log(travel_data[i])
                continue;
            }
            hotel_name = travel_data[i].hotel_name
            no_of_people = travel_data[i].no_of_people
            from_date = travel_data[i].from_date.substring(0, 10)
            to_date = travel_data[i].to_date.substring(0, 10)
            email = travel_data[i].email
            if(travel_data[i].status=="Approved")
            {
             $("#usertab10").append(`<tr>
            <th style="padding:15px;">${hotel_name}</th>
            <th>${no_of_people}</th>
            <th>${from_date}</th>
            <th>${to_date}</th>
            <th>${email}</th>
            <th><div onclick="failure(email)" style="background:red;padding:10px;border-radius:10px;cursor:pointer;display:inline">Reject</div></th>
            </tr>`)
            }
            if(travel_data[i].status=="Rejected")
            {
             $("#usertab10").append(`<tr>
            <th style="padding:15px;">${hotel_name}</th>
            <th>${no_of_people}</th>
            <th>${from_date}</th>
            <th>${to_date}</th>
            <th>${email}</th>
            <th><div onclick="success(email)" style="background:green;padding:10px;border-radius:10px;cursor:pointer;display:inline">Accept</div></th>
            </tr>`)
            }
            if (travel_data[i].status=="Approved" || travel_data[i].status=="Rejected")
            {
                
                continue;
                
            }
            $("#usertab6").append(`<tr>
           <th style="padding:15px;">${hotel_name}</th>
           <th>${no_of_people}</th>
           <th>${from_date}</th>
           <th>${to_date}</th>
           <th>${email}</th>
           <th><div onclick="success('${email}')" style="background:green;padding:10px;margin-left:5px;margin-right:5px;border-radius:10px;cursor:pointer;display:inline">Accept</div><div onclick="failure(email)" style="background:red;padding:10px;border-radius:10px;cursor:pointer;display:inline">Reject</div></th>
           </tr>`)
        

        }
    });
});


function success(email) {
    console.log(to_date)
    var url = 'http://127.0.0.1:3007/hotels/updates'
    // $.post('http://127.0.0.1:3007/hotels/update',{email:email},(data,status)=>{
    //     alert(responseText.responseText)
    // })
    $.ajaxSetup({
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    $.post(url, JSON.stringify({ email: email }), function (xhr, status, responseText) {
        alert(responseText.responseText)
    });
};

function failure(email) {

    // $.post('http://127.0.0.1:3007/hotels/update',{email:email},(data,status)=>{
    //     alert(responseText.responseText)
    // })
    $.ajax({ type: "post", url: "http://127.0.0.1:3007/hotels/updatesreg", contentType: "application/json", data: JSON.stringify({email:email}), xhrFields: { withCredentials: false, }, headers: {}, success: function (data) { console.log("Success"); console.log(data); }, error: function () { console.log("We are sorry but our servers are having an issue right now"); }, });

 

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

