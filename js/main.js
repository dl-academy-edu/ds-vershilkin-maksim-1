"use strict";

(function main() {

  let elm = "feedback";
  let buttonName = "slider__button";
  let closeName = "feedback__close";

  let button = document.querySelector(`.${buttonName}`);
  let form = document.querySelector(`.${elm}`);

  button.addEventListener("click", modal, false);
  form.addEventListener("click", modal, false);

  document.body.addEventListener("keydown", function(e) {

    let modal = document.querySelector(`.${elm}`);
    let hidingClass = "feedback--hidden";

    if (e.keyCode == 27 && !modal.classList.contains(hidingClass)) {
        modal.classList.add(hidingClass);
        document.body.style.overflow = "scroll";
    } else if (e.keyCode == 27 && !modal.classList.contains(hidingClass)) {
        modal.classList.add(hidingClass);
        document.body.style.overflow = "scroll";
    }

  });

  function modal(e) {

    let modal = document.querySelector(`.${elm}`);
    let hidingClass = "feedback--hidden";
    let firstInput;

    if (e.target.classList.contains(buttonName)) {
      modal.classList.remove(hidingClass);
      document.body.style.overflow = "hidden";
      firstInput = form.querySelectorAll(".feedback__input")[0];
      firstInput.focus();
    } else if (e.target.classList.contains(closeName)) {
      modal.classList.toggle(hidingClass);
      document.body.style.overflow = "scroll";
    }

  }

}());
