
function irCarta() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("intermedio").classList.remove("oculto");
}

function mostrarCarta() {
    document.getElementById("intermedio").style.display = "none";
    document.getElementById("carta").classList.remove("oculto");
    lanzarCorazones();
}

document.addEventListener("DOMContentLoaded", () => lanzarConfeti());

function lanzarConfeti() {
    const container = document.getElementById("confetti-container");
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "absolute";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.background = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = Math.random() * window.innerHeight + "px";
        confetti.style.opacity = Math.random();
        confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)";
        confetti.style.animation = "caer 3s ease-in-out infinite";
        container.appendChild(confetti);
    }
}

function lanzarCorazones() {
    const container = document.getElementById("corazones-container");
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = (Math.random() * 20 + 20) + "px";
        heart.style.animation = "subir 4s ease-in forwards";
        container.appendChild(heart);
    }
}

const style = document.createElement('style');
style.textContent = `
@keyframes caer {
    0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}
@keyframes subir {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
