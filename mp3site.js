$('.pagelang').on('click',function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
});
let input = document.getElementById('search-link')
let button = document.querySelector('.button')
$('#search-link').on('input',function(){
    if($('#search-link').val().length > 10 || $('#search-link').val().length > 15){
        $('.button').removeClass('notactive')
    }else{
        $('.button').addClass('notactive')
    }
});
$('.burger').click(()=>{
    $('.link-text').toggleClass('active')
    if($('.link-text').hasClass('active')){
        $('.burger span i').removeClass('fa-bars')
        $('.burger span i').addClass('fa-xmark')
    }else{
        $('.burger span i').addClass('fa-bars')
        $('.burger span i').removeClass('fa-xmark')
    }
});
$('#name,#email,#textarea').on('input',function(){
    if($('#name').val().length > 3 && $('#email').val().length > 5 && $('#textarea').val().length > 10){
        $('.contactbutton').removeClass('notactive')
    }else{
        $('.contactbutton').addClass('notactive')
    }
});
$('.contact-our').click(()=>{
    $('.contact-body-container').addClass('active')
});
$('.contactform-x-icon').click(()=>{
    $('.contact-body-container').removeClass('active')
}); 
const toTop = document.querySelector('.to-top')
window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add('active')
    }else{
        toTop.classList.remove('active')
    }
});
let list = document.querySelectorAll('.list')
let formatTitle = document.querySelector('.format-title')
let listContainer = document.querySelector('.list-container')
let formatIcon = document.querySelector('.format-icon')
let title = document.querySelector('.title')
list.forEach(item =>{
    item.addEventListener('click',()=>{
        formatTitle.innerHTML = item.innerText;
        listContainer.classList.remove('active')
        formatIcon.classList.remove('rotated')
        title.style.outline = "none"
    });
});
document.querySelector('.title').onclick = function ( ) {
    listContainer.classList.toggle('active')
    formatIcon.classList.toggle('rotated')
    title.style.outline = "2px solid #1660ff"
};  
