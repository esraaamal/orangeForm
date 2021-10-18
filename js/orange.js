let email=document.getElementById('email');
let messageEmail=document.getElementById('EmailMessage')

let phone=document.getElementById('mobile');
let phoneMessage=document.getElementById('MobileMessage')

let password=document.getElementById('password');
let passMessage=document.getElementById('passMessage')

let checkBtn=document.getElementById('chAgree')
let checkMessage=document.getElementById('checkMessage')

let submitBtn=document.querySelector('.next1')
//(?=.*[0-9]) >> at least one number
// (?=.*[!@#$%^&*]) >> at least one special charcter 


// var passwordCheck =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6-18}$/
// var EmailCheck=/^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
// var mobileCheck =/^[077][0-9]{10}$/

let regexEmail = /^[a-z0-9._-]+@(gmail|yahoo).com$/;
let regexMobile = /^[0][7][7][0-9]{7}$/;
let passMobile = /^[A-Z]{6,18}$/i;


submitBtn.addEventListener('click',function(e){

    if (email.value == "") {
        messageEmail.style.color="orange"
        messageEmail.innerText='please Enter the email' } 
      else {
        if (email.value.match(regexEmail)) {
            messageEmail.innerText=""
            email.style.border="2px solid green";
            email.style.boxShadow="1px 0px 2px green";
           
        } else {
            messageEmail.style.color="orange"
            messageEmail.innerText="Invalid Email"
        }
      }
      /////Mobile/////
if(phone.value== ""){
    phoneMessage.style.color="orange"
    phoneMessage.innerText="Please Enter Your Phone Number"

}
else{
    if (phone.value.match(regexMobile)) {
        phoneMessage.innerText="";
        phone.style.border="2px solid green";
        phone.style.boxShadow="1px 0px 2px green";
    }
    else{
        phoneMessage.style.color="orange"
        phoneMessage.innerText="Please orange Phone Number"
    }
}




    ////password
    if (password.value == "") {
        passMessage.style.color="orange"
        passMessage.innerText="Enter the password"

    }
    else{
        if (password.value.match( passMobile)) {
            passMessage.innerText=""
            password.style.border="2px solid green";
            password.style.boxShadow="1px 0px 2px green";
        }
        else{
            passMessage.style.color="orange"
            passMessage.innerText="The Password should be between 6-18 characters."
        }


    }

if(!checkBtn.checked){
    checkMessage.style.color="orange"
    checkMessage.innerText="You have to check the Box"
   
}
else{

    checkMessage.textContent=""
}


e.preventDefault();
})