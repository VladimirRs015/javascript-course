 import styles from "./assets/css/style.scss";
import hamburger_menu from "hamburgers/dist/hamburgers.min.css"
import clock from "./assets/js/alarm.js";
import hamburgers from "./assets/js/harmburger_behavior.js";
import scroll_top_button from './assets/js/scroll_top_button.js'
import themes_handler from './assets/js/themes_handler'
themes_handler('.theme-chooser')
document.addEventListener('DOMContentLoaded',()=>{
  scroll_top_button()
  hamburgers(".hamburger--collapse", "nav", true);
  clock(true);
})
if (module.hot) {
  module.hot.accept();
}
