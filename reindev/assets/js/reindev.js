document.querySelectorAll("[data-toggle-modal]").forEach(function (element) {
  const targetId = element.getAttribute("data-toggle-modal");
  const target = document.querySelector(targetId);

  if (!target) return;

  element.onclick = function () {
    const active = target.classList.contains("active");

    document.body.style.overflowY = !active ? "hidden" : "";

    if (active) {
      target.onclick = null;
    } else {
      target.classList.add("active");
    }
    if (active) {
      target.classList.remove("active");
    }
  };
});

document.querySelectorAll(".collapsible").forEach(function (element) {
  element.addEventListener("click", function (event) {
    if (!event.target.parentNode.classList.contains("collapsible-menu")) {
      element.classList.toggle("active");
    }
  });
});

const audio = new Audio("/reindev/assets/audio/click.mp3");
const buttons = document.querySelectorAll("[data-play-sound]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
