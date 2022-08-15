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
  if (document.querySelector("html").style.width < 767 + "px") {
    if (!menu_active) {
      menu_active = true
      toggle_menu.classList.toggle("active-icon");
      links_ul.style.display = "block";
    } else {
      menu_active = false
      toggle_menu.classList.remove("active-icon");
      links_ul.style.display = "none";
    }
  } else {
    links_ul.style.display = "flex"
  }
});

links_ul.onclick = function (e) {
  e.stopPropagation;
}

spans.onclick = function (e) {
  e.stopPropagation
}

center.addEventListener('click', () => {
  social.forEach((e) => {
    e.classList.toggle('rotate')
  });
}
)

whatsApp.addEventListener('click', (e) => {
  let overlay = document.createElement('div');

  overlay.className = 'popup-overlay';

  document.body.appendChild(overlay);

  let popupBox = document.createElement('div');

  popupBox.className = 'popup-box';

  document.body.appendChild(popupBox)

  let whatsNumber = document.createElement("h3");

  let numberText = document.createTextNode("+201008202048");

  whatsNumber.appendChild(numberText);

  popupBox.appendChild(whatsNumber);

  let closeButton = document.createElement("span");

  let closeButtonText = document.createTextNode("X");

  closeButton.appendChild(closeButtonText);

  popupBox.appendChild(closeButton);

  closeButton.className = 'close-botton';
})

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


setTimeout(() => {
  loader.classList.add("noloader");
  // window.addEventListener("load", () => {

  //   console.log("Done")
  // })
}, 3000)




window.onscroll = function () {

  if (window.scrollY >= ourSkills.offsetTop - 300) {

    spans_Skills.forEach(s => {

      s.style.width = s.dataset.width
    })
  }
}
