document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); 
});

document.querySelector(".hamburger").addEventListener("click", function(){
  document.querySelector(".mobile-menu").classList.toggle("none");
})