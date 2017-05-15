
var link = document.querySelector(".writeus_btn");
var overlay = document.querySelector(".modal_overlay");
var writeus = document.querySelector(".modal_write");
var close = writeus.querySelector(".modal_write_close");
var form = writeus.querySelector("form");

var name = writeus.querySelector("[name=name]");
var email = writeus.querySelector("[name=email]");
var msg = writeus.querySelector("[name=msg]");

var storage_name = localStorage.getItem("name");
 
link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal_overlay_show");
  writeus.classList.add("modal_write_show");

  if(storage_name) {
  name.value = storage_name;
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  writeus.classList.remove("modal_write_show");
  overlay.classList.remove("modal_overlay_show");
});

form.addEventListener("submit", function(event) {
  if (!name.value) {
  event.preventDefault();
  } 
  else {
    localStorage.setItem("name", name.value);
  }
});
    