const accordion  =  document.querySelectorAll('.container__btn');


accordion.forEach((item) => {
    if(item.className.includes('active')){
        item.children[1].style.maxHeight = item.children[1].scrollHeight + 'px';
      }
   item.addEventListener('click' , () => {
      item.classList.toggle('active');
     
      if(item.children[1].style.maxHeight){
        item.children[1].style.maxHeight = null;
      }else{
        item.children[1].style.maxHeight = item.children[1].scrollHeight + 'px';
      }
   })
});