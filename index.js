const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')


confirmPassword.addEventListener('input',()=>{
    if(confirmPassword.value != password.value){
        confirmPassword.classList.add('error')
        password.classList.add('error')
        password.classList.remove('right')
        password.classList.remove('right')
    }
    else{
        confirmPassword.classList.remove('error')
        confirmPassword.classList.add('right')
        password.classList.remove('error')
        password.classList.add('right')
    }
})