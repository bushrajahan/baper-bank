document.getElementById('btn-submit')?.addEventListener('click',function(){
    // step 2:get the email address inside the email field
    const emailField =document.getElementById('email-id');
    //always remember to use .value to get text from input field
    const email =emailField.value;
    // console.log(email)
    // step 3:get the password
    // set id for the email
    // get the value of password
    
    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    // console.log(password)


    // DANGER:donot verify email password on the server side\
    // step4:verify email and password
   if(email == 's@gmail.com' && password==='1234'){
    window.location.href='./js/bank.html';
   }
   else {
    alert('Toka tajjo sontan gosona korlm.tuii password vole gasot ');
   } 

})