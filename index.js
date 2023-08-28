const targerElement = document.querySelectorAll(".drum");

// click event
for (let index = 0; index < targerElement.length; index++) {
  targerElement[index].addEventListener("click", function () {
    let key = targerElement[index].innerHTML;
    // targerElement[index].innerHTML can be replaced by this.innerHTML here this also point to same as targerElement[index].innerHTML, so i will use (this) instead
    key = this.innerHTML;

    makeSound(key);
    buttonAnimation(key);
  });
}

// keypress event

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(key) {
  var selctedbutton = document.querySelector("." + key);
  selctedbutton.classList.add("pressed");

  setTimeout(() => {
    selctedbutton.classList.remove("pressed");
  }, 200);
}
