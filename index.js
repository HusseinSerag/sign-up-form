const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')


confirmPassword.addEventListener('input',()=>{
        password.classList.remove('right')
        password.classList.remove('right')
        password.classList.remove('error')
        confirmPassword.classList.remove('error')
    if(confirmPassword.value != password.value){
        confirmPassword.classList.add('error')
        password.classList.add('error')
        
    }
    else{
        
        confirmPassword.classList.add('right')
      
        password.classList.add('right')
    }
})