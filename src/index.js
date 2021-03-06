import hamburger_menu from "hamburgers/dist/hamburgers.min.css"
import hamburgers from "./assets/js/harmburger_behavior.js";
import scroll_top_button from './assets/js/scroll_top_button.js'
import themes_handler from './assets/js/themes_handler'
import ball_game from './assets/js/ballgame.js'
import connection_detector from './assets/js/connection_detection'
import slides_ctrls from './assets/js/slider.ctrls'
import intersectionObserver from './assets/js/intersectionObserver'
import webcam from "./assets/js/webcam";
import vid from './assets/video.mp4'
import styles from "./assets/css/style.scss";

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('#videoSource').src =vid 
  themes_handler('.theme-chooser')
  scroll_top_button()
  hamburgers(".hamburger--collapse", "nav", true);
  slides_ctrls()
  intersectionObserver()
  webcam()
})
document.addEventListener('keydown',(e)=>{
  ball_game(e,"board","ball")
})

//Connection detection 


window.addEventListener('online',connection_detector)
window.addEventListener('offline',connection_detector)

if (module.hot) {
  module.hot.accept();
}

