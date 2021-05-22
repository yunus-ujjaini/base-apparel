function checkEmail(){
    let email=document.getElementById("email");
    console.log(email.value);
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(validRegex))
    {
        let error=document.getElementById("sub");
        error.classList.remove("btnvis");
        email.style.border="1px solid #ce9797";
    }
    else{
        let error=document.getElementById("sub");
        error.classList.add("btnvis");
        email.style.border="2px solid #F78B8B";
    }
     
}