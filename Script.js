// Typing Animation
const text = ["Frontend Developer", "Flutter Developer", "Web Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 150);
})();

// Dark Mode
const themeBtn = document.getElementById("theme-toggle");
themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
};

// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.onclick = () => {
    navLinks.classList.toggle("active");
};

// Scroll Reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((el)=>{
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if(revealTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
});