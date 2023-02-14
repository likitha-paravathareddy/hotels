$(document).ready(function(){
    $("#ooty").click(function () {

        localStorage.setItem("currentplace",document.getElementById("ootyname").innerHTML);
    });
    $("#goa").click(function () {

        localStorage.setItem("currentplace",document.getElementById("goaname").innerHTML);
    });
    $("#maha").click(function () {

        localStorage.setItem("currentplace",document.getElementById("mahaname").innerHTML);
    });

})