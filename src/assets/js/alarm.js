// import DOMinator from './DOMinator/src/click/index.js'

// I'd written query selector a couple of time and i'm thinkin about to add 
// a feature which get the html by it's self . 
export default function(){
  const alarm = document.querySelector('.clock-container')
  alarm.addEventListener('click',()=>{
    // Start
    if(event.target.matches('#start')){
      console.log('iniciando')
    }
    else if(event.target.matches('#stop')){
      console.log('stoping')
    }
    else if(event.target.matches('#start-alarm')){
      console.log('starting alarm')
    }
    else if(event.target.matches('#stop-alarm')){
      console.log('stoping alarm')
      
    }
  })
}
