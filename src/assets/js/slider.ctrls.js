const $slides = document.querySelectorAll('.slides')
const $slider = document.querySelector('.slider')
const $btnSlideRight = document.querySelector('.btn-slide-right')
const $btnSlideLeft = document.querySelector('.btn-slide-left')
let currentSlide = Math.floor(Math.random() * $slides.length-1) + 1; 

$slides[currentSlide].classList.add('is-active')

export default function(){
    $slider.addEventListener('click',()=>{
        event.preventDefault()
        $slides[currentSlide].classList.remove('is-active')
        if(event.target == $btnSlideRight){
            if(currentSlide === $slides.length -1){
                currentSlide = 0
            }
            else currentSlide++
        } 
        else if(event.target === $btnSlideLeft){
            if(currentSlide === 0){
                currentSlide = $slides.length -1
            }
            else currentSlide--
            
        }

        $slides[currentSlide].classList.add('is-active')
    })

    
}