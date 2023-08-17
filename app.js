let toggle = true;

function myFunction() {
  var element = document.getElementById("section");
  var form = document.getElementById("form");
  var inputText = document.getElementById("input");
  var btn = document.getElementById("btn");

  toggle = !toggle;
  if (toggle) {
    document.getElementById("image").src = "./images/icon-moon.svg";
  } else {
    document.getElementById("image").src = "./images/icon-sun.svg";
  }

  element.classList.toggle("screen-light");
  form.classList.toggle("form-light");
  inputText.classList.toggle("input-light");
  btn.classList.toggle("btn-light");
}
