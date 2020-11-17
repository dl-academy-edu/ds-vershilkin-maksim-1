"use strict";

(function main() {

  let element = "feedback";
  let buttonName = "slider__button";
  let modalName = "feedback";
  let closeName = "feedback__close";

  let button = document.querySelector(`.${buttonName}`);
  let form = document.querySelector(`.${element}`);

  button.addEventListener("click", modal, false);
  form.addEventListener("click", modal, false);

  document.body.addEventListener("keydown", function(e) {

    let modal = document.querySelector(`.${modalName}`);
    let hidingClass = "feedback--hidden";

    if (e.target === button && e.keyCode == 27 && !modal.classList.contains(hidingClass)) {
        modal.classList.add(hidingClass);
        document.body.style.overflow = "scroll";
    } else if (e.keyCode == 27 && !modal.classList.contains(hidingClass)) {
        modal.classList.add(hidingClass);
        document.body.style.overflow = "scroll";
    }

  });

  function modal(e) {

    let modal = document.querySelector(`.${modalName}`);
    let hidingClass = "feedback--hidden";

    if (e.target.classList.contains(buttonName)) {
      modal.classList.toggle(hidingClass);
      document.body.style.overflow = "hidden";
    } else if (e.target.classList.contains(closeName)) {
      modal.classList.toggle(hidingClass);
      document.body.style.overflow = "scroll";
    }

  }

}());
