let logo = document.querySelector(".logo");
logo.addEventListener("mouseup", function() {
	this.classList.add("animated", "bounce");
}) 
logo.addEventListener("mousedown", function() {
	this.classList.remove("animated", "bounce");
});