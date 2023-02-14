window.onload=function(){
    document.getElementById('name').readOnly = true;
    document.getElementById('username').readOnly = true;
    document.getElementById('mail').readOnly = true;
    document.getElementById('address').readOnly = true;
    save=document.getElementById("save")
    save.addEventListener("click",()=>{
        document.getElementById('name').readOnly = true;
        document.getElementById('username').readOnly = true;
        document.getElementById('mail').readOnly = true;
        document.getElementById('address').readOnly = true;
    
    })

    edit=document.getElementById("edit")
    edit.addEventListener("click",()=>{
        document.getElementById('name').readOnly = false;
    document.getElementById('username').readOnly = false;
    document.getElementById('address').readOnly = false;
    })
}