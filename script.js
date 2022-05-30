const button = document.querySelectorAll(".button");
const frame = document.querySelector(".background");

button.forEach(button => {
    button.addEventListener("click", function(){
        this.innerHTML = "bai bai nigger, back to the lobby";
        setInterval(function(){
            location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 1500);
    });
});