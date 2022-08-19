let links_ul = document.querySelector("#links");
let toggle_menu = document.querySelector("#toggle_menu");
let spans = document.querySelector("#toggle_menu span");
let menu_active = false;
let center = document.querySelector("#btn");
let social = document.querySelectorAll('.container-contact .social');
let whatsApp = document.querySelector("#whatsApp");
const loader = document.querySelector(".loader");
let ourSkills = document.querySelector(".our-skills");
let spans_Skills = document.querySelectorAll(".the-progress span");




toggle_menu.addEventListener('click', function (e) {
  e.stopPropagation;
  if (!menu_active) {
    menu_active = true
    toggle_menu.classList.toggle("active-icon");
    links_ul.style.display = "block";
  } else {
    menu_active = false
    toggle_menu.classList.remove("active-icon");
    links_ul.style.display = "none";
  }
});



links_ul.onclick = function (e) {
  e.stopPropagation;
}

spans.onclick = function (e) {
  e.stopPropagation
}

// center.addEventListener('click', () => {
//   social.forEach((e) => {
//     e.classList.toggle('rotate')
//   });
// }
// )

document.addEventListener('click', function (e) {
  if (e.target.className == 'close-botton') {

    e.target.parentNode.remove();

    document.querySelector(".popup-overlay").remove();
  }
})

let scrollUpBtn = document.querySelector(".scroll-up");

window.onscroll = function () {
  if (window.scrollY >= 800) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

scrollUpBtn.onclick = function () {
  window.scrollTo(0, 0);
};
let body = document.querySelector("body")


window.addEventListener("load", () => {
  setTimeout(() => {
    body.style.overflow = "auto";
    loader.classList.add("noloader");

  }, 1500)
})




window.onscroll = function () {

  if (window.scrollY >= ourSkills.offsetTop - 300) {

    spans_Skills.forEach(s => {

      s.style.width = s.dataset.width
    })
  }
}
