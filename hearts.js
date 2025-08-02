
document.addEventListener("DOMContentLoaded", function() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.top = "50%";
    heart.style.left = "50%";
    heart.style.fontSize = "2rem";
    heart.style.opacity = 0.8;
    heart.style.animation = "float 4s ease-in-out infinite";
    document.body.appendChild(heart);
});
