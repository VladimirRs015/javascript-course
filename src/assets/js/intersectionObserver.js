export default function () {
  const config = {
    threshold: 0.5,
  };

  const $sections = document.querySelectorAll("section[data-intersect-menu]");

  const observer = new IntersectionObserver((entrys) => {
    
    entrys.forEach((entry) => {
      let element;
      element = document.querySelector(`a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
        element.parentElement.classList.add("menu-active");
      } else {
        element.parentElement.classList.remove("menu-active");
      }
    });
  }, config);
  $sections.forEach((e) => observer.observe(e));
}
