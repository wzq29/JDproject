fn1();
function fn1(){
    var qr_signin = document.querySelector("#qr_signin"); 
    var qrcode = document.querySelector(".qrcode");
    var form_signin = document.querySelector("#form_signin");
    var form = document.querySelector(".form");

    qr_signin.addEventListener('mouseenter',show_qrcode);
    form_signin.addEventListener('mouseenter',show_form);

    function show_qrcode(){
        qr_signin.style.color = "red";
        form_signin.style.color = "black";
        qrcode.style.display = "block";
        form.style.display = "none";

    }
    function show_form(){
        qr_signin.style.color = "black";
        form_signin.style.color = "red";
        qrcode.style.display = "none";
        form.style.display = "block";

    }





}