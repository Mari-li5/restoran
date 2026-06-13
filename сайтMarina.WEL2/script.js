window.addEventListener('DOMContentLoaded',()=> {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.mobile__menu');
    const reviewsMn = document.querySelector('.reviews__main');

    // toTop-btn
    const toTopBtn = document.querySelector('.to-top');
burger.addEventListener('click',()=> {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    reviewsMn.classList.toggle('no-scroll');
    document.body.classList.toggle('no-scroll');
})
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
function windowOnScroll() {
    if(document.body.scrollTop>2000||document.documentElement.scrollTop > 2000) {
        toTopBtn.classList.add('active');
    }else {
        toTopBtn.classList.remove('active');
    }
}
window.onscroll = function() {windowOnScroll()};
toTopBtn.addEventListener('click',()=> topFunction())
})