/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = `0`;
  } else {
    document.getElementById("navbar").style.top = `-85.6px`;
  }
  prevScrollpos = currentScrollPos;
}

const menu = document.getElementById("menu")
const list = document.getElementById("list")

menu.onclick = function() {
  list.classList.toggle("show")
  if(menu.classList.contains("fa-bars")){
    menu.classList.remove("fa-bars")
    menu.classList.add("fa-xmark")
  }
  else{
    menu.classList.remove("fa-xmark")
    menu.classList.add("fa-bars")
  }
}

const faqs = document.querySelectorAll('#expand');
const info = document.querySelectorAll('.info')


for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", function() {
    for (let j = 0; j < info.length; j++) {
      if (j === i) {
        info[j].classList.toggle("in");
      } else {
        info[j].classList.remove("in");
      }
    }
  });
}


