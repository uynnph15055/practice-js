var form = document.querySelector('form');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var passwordConfirm = document.querySelector('#password-confirm');



form.addEventListener('submit' , (e) => {
    e.preventDefault();
    
    console.log(  checkPassword(password.value.trim() , passwordConfirm.value.trim()));
    if(username.value.trim() === ''){
        showError(username, 'Bạn chưa điền tên !!!')
    }else{
        showSuccess(username);
    }

    if(email.value.trim() === ''){
        showError(email, 'Bạn chưa email !!!')
    }else if(!isEmail(email.value.trim())){
        console.log(email.value.trim());
        showError(email, 'Sai định dạng email !!!')
    }else{
        showSuccess(email);
    }

    if(password.value.trim() === ''){
        showError(password, 'Bạn chưa password !!!')
    }else{
        showSuccess(password);
    }

    if(passwordConfirm.value.trim() === ''){
        showError(passwordConfirm, 'Bạn chưa điền password confirm !!!')
    }else if(!checkPassword(password.value.trim() , passwordConfirm.value.trim())){
        showError(passwordConfirm, 'Passwword confirm sai !!!');
        showError(password, 'Nhập lại password !!!');
        password.value = '';
        passwordConfirm.value = '';
    }else{
        showSuccess(passwordConfirm);
    }
})

function showError(element , message){
    var formControl = element.parentElement;
    formControl.classList.add('error');
    formControl.querySelector('small').innerText = message;
}

function isEmail(email){
   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function checkPassword(password , passwordConfirm){
    if(password !== passwordConfirm){
        return false;
    }else{
        return true;
    }
 }

function showSuccess(element){
    element.parentElement.classList.remove('error');
    element.parentElement.classList.add('success');
}
