document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector("h1");
  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");
  var button = document.querySelector("button");
  button.addEventListener("click", function() {
    window.location.href='http://google.com';
  })
})
