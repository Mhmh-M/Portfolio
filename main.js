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
let normal_Boxes_go_Down = document.querySelector(".projects-normal .go-down");
let bootstrap_Boxes_go_Down = document.querySelector(".projects-with-bootstrap .go-down");
let normal_Boxes = document.querySelectorAll(".projects-normal .box")
let bootstrap_Boxes = document.querySelectorAll(".projects-with-bootstrap .box")




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

goDownCheker(normal_Boxes, normal_Boxes_go_Down);
goDownCheker(bootstrap_Boxes, bootstrap_Boxes_go_Down)

let display_t = false
normal_Boxes_go_Down.addEventListener("click", () => {
  checker(normal_Boxes);
})
bootstrap_Boxes_go_Down.addEventListener("click", () => {
  checker(bootstrap_Boxes);
})


function checker(b) {
  if (!display_t) {
    nothing("block", b)
    display_t = true
  } else {
    nothing("none", b)
    display_t = false
  }
}
function nothing(type, box) {
  for (let i = 3; i < box.length; i++) {
    box[i].style.cssText = `display:${type}`;
  }
}
function goDownCheker(boxes, d) {
  if (boxes.length < 3) {
    d.style.display = "none";
  } else {
    d.style.display = "block";
  }
}

AOS.init();