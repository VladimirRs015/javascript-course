export default function(BtnValidCSSProperty,PanelValidCSSProperty,deep) {
  const d = document
  const $panel = d.querySelector('nav')
  const $hamburgetButton = d.querySelector('.hamburger')
  // hamburgerBehavior
  d.addEventListener('click',()=>{
    if(deep){
      if(event.target.matches(`${BtnValidCSSProperty} ,${BtnValidCSSProperty} *`)){
        $panel.classList.toggle('li-menu-is-active')
        $hamburgetButton.classList.toggle('is-active')
      }
    }
    else {
      if(event.target.matches(`${BtnValidCSSProperty}`)){
        $panel.classList.toggle('li-menu-is-active')
        $hamburgetButton.classList.toggle('is-active')
      }
    }
  })
// Panel Menu Behavior
  $panel.addEventListener('click',()=>{
      if(event.target.matches(`${PanelValidCSSProperty},${PanelValidCSSProperty} * `)){
        $panel.classList.remove('li-menu-is-active')
        $hamburgetButton.classList.remove('is-active')
      }

  })
}