
$(document).ready(function(){
  $("#addplace").click(function(){
        window.open("admin.html")
//      src=$("#imgsrc").val();
//      name=$("#imgname").val();
//      data=$("#imgdata").val();
//      var data1={
//         src:src,
//         name:name,
//         data:data
//       };
//       data1=JSON.stringify(data1);
//       // alert(data1);
//      var url = 'http://127.0.0.1:3007/places/reg';
//      $.ajaxSetup({ 
//         headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//      }
//      }); $.post(url,data1,function(xhr,status,responseText){
//       if(responseText.responseText=="1")
//       {
//     
//         alert("place request already exists sorry for inconvinience we will get back to you soon");
//         return;
//       }
//      });
  });
});

// const submit=document.getElementById("addplace")
// submit.addEventListener("click",()=>{
//     console.log("button clicked")

//     src=document.getElementById("imgsrc").value
//     name=document.getElementById("imgname").value
//     data=document.getElementById("imgdata").value
//     const xhr1=new XMLHttpRequest();
//     var url = 'http://127.0.0.1:3008/places';
//     xhr1.open("POST", url);
//     var data1={
//       src:src,
//       name:name,
//       data:data
//     };
//     data1=JSON.stringify(data1)
//     xhr1.setRequestHeader("content-type","application/json")

//     xhr1.send(data1)
//     console.log("success")

// })

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})