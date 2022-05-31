// const button = document.querySelectorAll(".button");
// const frame = document.querySelector(".background");

// button.forEach(button => {
//     button.addEventListener("click", function(){
//         this.innerHTML = "bai bai nigger, back to the lobby";
//         setInterval(function(){
//             location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
//         }, 1500);
//     });
// });

const dark_theme_button = document.querySelector(".dark-theme-button");
const light_theme_button = document.querySelector(".light-theme-button");
const body = document.body;

$(".light-theme-button").toggle();

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
     $(".dark-theme-button").toggle();
     $(".light-theme-button").toggle();
     body.classList.toggle("dark-mode");
}

dark_theme_button.addEventListener("click", function(){
     $(".dark-theme-button").toggle();
     $(".light-theme-button").toggle();
     body.classList.toggle("dark-mode");
});

light_theme_button.addEventListener("click", function(){
     $(".light-theme-button").toggle();
     $(".dark-theme-button").toggle();
     body.classList.toggle("dark-mode");
});