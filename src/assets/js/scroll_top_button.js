export default function(){
const d = document;
const $scrollTopButton = document.querySelector("#scroll-top-button");
const $scrollTopButtonContainer = document.querySelector('.scroll-top-button')
d.addEventListener("scroll", () => {
  if(window.scrollY > 600){
    $scrollTopButtonContainer.classList.remove('hidden')
  }
  else {
    $scrollTopButtonContainer.classList.add('hidden')
  }
});
$scrollTopButton.addEventListener('click',()=>{
    scrollTo({
        top : 10,
        behavior : 'smooth'
    })
})}
