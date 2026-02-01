// No button runaway
const noBtn = document.getElementById("no");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

// Yes button action
document.getElementById("yes").onclick = () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      background:#ff4d6d;
      color:white;
      font-size:28px;
      text-align:center;">
      Yayyy! 💕<br>You just made my Valentine perfect ❤️
    </div>
  `;
};

// Image upload preview
function loadImage(event, id) {
  const img = document.getElementById(id);
  img.src = URL.createObjectURL(event.target.files[0]);
}

// Heart rain generator
const heartContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);
