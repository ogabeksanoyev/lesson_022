// var header = document.getElementById("nav");
// var btns = header.getElementsByClassName("lix");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }


window.addEventListener('DOMContentLoaded' , function(){
  // window.addEventListener('scroll', function(){
  //   const header = document.querySelector('header');
  //   header.classList.toggle('sticky' , window.scrollY > 0)
  // })

  // const btnx = document.querySelector('.btnx');
  // const header_ul = document.querySelector('.header_ul');

  // btnx.addEventListener('click',()=>{
  //   btnx.classList.toggle('active');
  //   header_ul.classList.toggle('active')
  // })
const scrollToTop_btn = document.querySelector('.scrollToTop-btn');
console.log(scrollToTop_btn);
window.addEventListener('scroll', ()=>{
scrollToTop_btn.classList.toggle('active_btn',window.scrollY>400)
})
scrollToTop_btn.addEventListener('click',()=>{
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", ()=>{
  const header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 100)
})
const menuBtn = document.querySelector(".hover_icon");
const navigation = document.querySelector('.navigation');
console.log(navigation);
const navigationItems = document.querySelector('.navigation li');
console.log(navigationItems);

menuBtn.addEventListener('click',()=>{
  menuBtn.classList.toggle("active_menu");
  navigation.classList.toggle("active_menu");
})

navigationItems.forEach(navItem => {
  navItem.addEventListener('click',() => {
    menuBtn.classList.remove("active_menu");
    navigation.classList.remove("active_menu");
  })
});
 


// function chnageActive(event){
// for(let i = 0; i < thumbs.length ; i++){
// thumbs[i].classList.remove('active')
// }
// event.classList.add("active");
// }
// console.log(thumbs);
})

