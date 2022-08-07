let links_ul = document.querySelector("#links");
let toggle_menu = document.querySelector("#toggle_menu");
let spans = document.querySelector("#toggle_menu span");
let menu_active = false;
let center = document.querySelector("#btn");
let social = document.querySelectorAll('.container-contact .social');
let whatsApp = document.querySelector("#whatsApp");



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
