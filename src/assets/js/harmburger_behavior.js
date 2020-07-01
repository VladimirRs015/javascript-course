import DOMinator from './DOMinator/src/click/DefaultEventHandler';
const $nav = document.querySelector("nav");
const $hamburgerButton = document.querySelector('.hamburger')
function menu_handler(result){
  console.log(result)
    if(result.match){
      $nav.classList.toggle('li-menu-is-active')   
      $hamburgerButton.classList.toggle('is-active')
    }
  }
  const buttons = new DOMinator({
    DOMcontext : '.hamburger',
    handler : menu_handler,
    event :'click',
    catchMatch: ['.hamburger','span'],
    deepSearch : true
  })

  
  function outside (result){
    if(result.match){
      $nav.classList.toggle('li-menu-is-active')   
      $hamburgerButton.classList.toggle('is-active')
    }
  }
  const outside_click_or_link = new DOMinator({
    DOMcontext : "nav",
    event:'click',
    handler : outside,
    catchMatch: ['.navigation','a'],
    deepSearch : true 
  })

export default {
      name : 'hamburger_behavior',
      DOMinatorComponents : [outside_click_or_link,buttons]
  }