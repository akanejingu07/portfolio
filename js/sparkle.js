const container = document.getElementById("sparkle-container");

/* 上から降るきらめき */
function createFallingSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  const size = Math.random() * 6 + 4;
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";

  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = "-20px";

  sparkle.style.animationDuration = Math.random() * 6 + 8 + "s";

  container.appendChild(sparkle);

  sparkle.addEventListener("animationend", () => {
    sparkle.remove();
  });
}

/* 出現頻度（控えめ） */
setInterval(createFallingSparkle, 600);

/* マウス付近で一瞬光る */
let lastSparkleTime = 0;

document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastSparkleTime < 150) return;
  lastSparkleTime = now;

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle mouse";

  const size = Math.random() * 4 + 4;
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";

  sparkle.style.left = e.clientX + (Math.random() * 10 - 5) + "px";
  sparkle.style.top = e.clientY + (Math.random() * 10 - 5) + "px";

  container.appendChild(sparkle);

  sparkle.addEventListener("animationend", () => {
    sparkle.remove();
  });
});
