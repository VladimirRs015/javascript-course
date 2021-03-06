// Rosolve themes handling saving all elements to modify in a variable andthen
//  i will make a function which change style depending on which theme is choosen
export default function(btnValidCSSSelector){
    const moon = "🌛"
    const sun = "🌞"
    const $theme_chooser = document.querySelector('.theme-chooser-button')
    function themeSetter(func){
        const themeRepeceptors = document.querySelectorAll('[data-themes-receptor="true"]')
        themeRepeceptors.forEach(element=>{
            func(element)
        })
    }
    function DarkTheme(){
       
        $theme_chooser.textContent = sun   
        themeSetter((element)=>{
            element.style.setProperty('color','#f7df1e')
            element.style.setProperty('background-color','#010101');
        });
        
    }
    function LightTheme(){
        $theme_chooser.textContent = moon 
        
        themeSetter((element)=>{
            element.style.setProperty('background','#f0f0f0')
            // element.style.setProperty('color','#010101');
            element.style.setProperty('color','#010101');


        });
    }
    document.addEventListener('click',()=>{
        if(event.target.matches(`${btnValidCSSSelector} , ${btnValidCSSSelector} *`)){
            event.target.parentElement.classList.toggle('theme-chooser-is-active')
                if($theme_chooser.textContent === sun){
                    LightTheme();
                }   
                else {
                    DarkTheme();
                }
        }
    })
}
