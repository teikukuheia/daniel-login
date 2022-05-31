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
const en_button = document.querySelector(".en");
const ru_button = document.querySelector(".ru");
const body = document.body;

$(".light-theme-button").toggle();
$(".en").toggle();

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
     $(".dark-theme-button").toggle();
     $(".light-theme-button").toggle();
     body.classList.toggle("dark-mode");
}

ru_button.addEventListener("click", function(){
     
     fetch("language.json")
        .then(response => response.json())
        .then(data => {
          $(".welcome-back").html(data.ru.welcome_back);
          $(".light-text").html(data.ru.switch_light);
          $(".dark-text").html(data.ru.switch_dark);
          $(".login").html(data.ru.login_text);
          $(".input-content p:nth-child(1)").html(data.ru.email);
          $(".input-content p:nth-child(3)").html(data.ru.password);
          $(".remember p").html(data.ru.remember_me);
          $(".link").html(data.ru.restore);
          $(".login-main-button").html(data.ru.login_main);
          $(".social-network-login").html(data.ru.login_social);
          $(".notice").html(data.ru.register_notice);
          $(".register-text").html(data.ru.register_text);
        });
     $(".ru").toggle();
     $(".en").toggle();
});

en_button.addEventListener("click", function(){
     fetch("language.json")
     .then(response => response.json())
     .then(data => {
       $(".welcome-back").html(data.en.welcome_back);
       $(".light-text").html(data.en.switch_light);
       $(".dark-text").html(data.en.switch_dark);
       $(".login").html(data.en.login_text);
       $(".input-content p:nth-child(1)").html(data.en.email);
       $(".input-content p:nth-child(3)").html(data.en.password);
       $(".remember p").html(data.en.remember_me);
       $(".link").html(data.en.restore);
       $(".login-main-button").html(data.en.login_main);
       $(".social-network-login").html(data.en.login_social);
       $(".notice").html(data.en.register_notice);
       $(".register-text").html(data.en.register_text);
     });
     $(".ru").toggle();
     $(".en").toggle();
});

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