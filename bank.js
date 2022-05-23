document.getElementById('btn').addEventListener('click',function(){
   const userField = document.getElementById('user-email');
    const userEmail = userField.value;

   const userPasswordField = document.getElementById('user-password');
     const userPassword = userPasswordField.value;

   if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
      window.location.href = 'banking.html';
   }
})