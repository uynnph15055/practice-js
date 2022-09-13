const fullName = document.querySelector('#fullname');
const jobs = document.querySelectorAll('.container__checkbox--input');
const phone = document.querySelector('#phone');
const btnSubmit = document.querySelector('.form-register');

let arrJobs = [];
jobs.forEach(item => {
  item.addEventListener('change' ,  () => {
    arrJobs.push(item.value);
  })
});

btnSubmit.addEventListener('submit' ,  (e) => {
    e.preventDefault();

    if(!fullName.value){
        fullName.style.border = "2px solid #D2001A"
        document.querySelector('.error-fullname').innerText = "Bạn chưa điền tên !";
    }else{
        fullName.style.border = null;
        document.querySelector('.error-fullname').innerText = "";
    }

    if (arrJobs.length == 0) {
        document.querySelector('.error-job').innerText = "Bạn chưa chọn nghề !";
    }else{
        document.querySelector('.error-job').innerText = "";
    }

    if(!phone.value){
        phone.style.border = "2px solid #D2001A"
        document.querySelector('.error-phone').innerText = "Bạn điền số điện thoại!";
    }else{
        phone.style.border = null
        document.querySelector('.error-phone').innerText = "";
    }

    setTimeout(() => {
        if(phone.value && fullName.value && arrJobs.length > 0){
            alert('Đăng ký thành công !!!');
        }
    } , 2000)
   
})