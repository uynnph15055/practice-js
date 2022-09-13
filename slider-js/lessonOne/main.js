const $ =  (element) => {
    var elements = document.querySelectorAll(element);
    return elements.length == 1 ? elements[0] : elements
}


const imgFeature = $('.img-feature');
const listImage = $('.list-img img');
const prevBtn =  $('.prev');
const prevNext =  $('.next');

var currentIndex = 0;

// const updateIndeeImgae = (index) => {
//     listImage.forEach((item ,index) => {
//         item.classList.remove('active');

//     });
// }

const updateImageSlider = (index) => {
    currentIndex = index;
    listImage.forEach((el ) => {
        el.classList.remove('active');
    });
    listImage[index].classList.add('active');
    imgFeature.style.opacity = '0';
   
    setTimeout(() => {
        imgFeature.src = listImage[index].getAttribute('src');
        imgFeature.style.opacity = '1'; 
    }, 200);

}

listImage.forEach((el , index) => {
    el.addEventListener('click' , e => {
        updateImageSlider(index);
    })
});

prevBtn.addEventListener('click' , (e) => {
    if(currentIndex == 0){
        currentIndex = listImage.length - 1;
    }else{
        currentIndex--;
    }
    updateImageSlider(currentIndex)
})

prevNext.addEventListener('click' , (e) => {
    if(currentIndex ==  listImage.length - 1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    updateImageSlider(currentIndex)
})

updateImageSlider(currentIndex);

