import DOMinator from './DOMinator/src/click/DefaultEventHandler'

// I'd written query selector a couple of time and i'm thinkin about to add 
// a feature which get the html by it's self . 
const $clockContainer = document.querySelector('.clock-container')

const clockCotrols = new DOMinator({
    DOMcontext : '.clock-container',
    event:'click',
    handler : (result)=>{
      if(result.match){
          console.log(true)
      }
    },
    catchMatch: '.clock-container',
    deepSearch : true
  })

  export default {
    name : 'clock_behavior',
    components : clockCotrols
  }