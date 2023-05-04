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

document.querySelectorAll('[role="carousel"]').forEach(function (carousel) {
  const container = carousel.querySelector('[role="carousel-content"]');
  var currentItem = container.children[0];
  var isMoving = false;
  var wasInteractedWith = false;

  if (carousel.classList.contains("auto")) {
    randomInterval(
      function (stop) {
        if (wasInteractedWith) stop();
        else increment();
      },
      3000,
      6000
    );
  }

  function increment() {
    isMoving = true;

    var nextItem =
      currentItem.nextElementSibling ||
      currentItem.parentNode.firstElementChild;

    var distance = nextItem.offsetLeft - currentItem.offsetLeft;

    currentItem = nextItem;
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      currentItem = currentItem.parentNode.firstElementChild;
      container.scrollBy({ left: -container.scrollWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: distance, behavior: "smooth" });
    }
    setTimeout(function () {
      isMoving = false;
    }, 350);
  }

  function decrement() {
    isMoving = true;

    var prevItem =
      currentItem.previousElementSibling ||
      currentItem.parentNode.lastElementChild;

    var distance = prevItem.offsetLeft - currentItem.offsetLeft;

    currentItem = prevItem;

    if (container.scrollLeft === 0) {
      currentItem = currentItem.parentNode.lastElementChild;
      container.scrollBy({ left: container.scrollWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: distance, behavior: "smooth" });
    }
    setTimeout(function () {
      isMoving = false;
    }, 350);
  }

  carousel
    .querySelector('[role="carousel-increment"]')
    .addEventListener("click", function (e) {
      if (isMoving) return;
      e.preventDefault();

      wasInteractedWith = true;

      increment();
    });

  carousel
    .querySelector('[role="carousel-decrement"]')
    .addEventListener("click", function (e) {
      if (isMoving) return;
      e.preventDefault();

      wasInteractedWith = true;

      decrement();
    });

  function randomInterval(callback, min, max) {
    let timeout;

    const randomNum = (max, min = 0) => Math.random() * (max - min) + min;

    const stop = () => clearTimeout(timeout);

    const tick = () => {
      let time = randomNum(min, max);
      stop();

      timeout = setTimeout(() => {
        tick();
        callback && typeof callback === "function" && callback(stop);
      }, time);
    };

    tick();
  }
});

const pool = [
  "This is a testing splash screen!",
  "Random Splash 1",
  "Random Splash 2",
  "Random Splash 3",
  "Random Splash 4",
  "Random Splash 5",
];

function generateString() {
  const randomString = pool[Math.floor(Math.random() * pool.length)];
  document.getElementById("random-pool").textContent = randomString;
}
document.addEventListener("DOMContentLoaded", generateString);

document.querySelectorAll("[data-play-sound='true']").forEach((button) => {
  button.addEventListener("click", () => {
    new Audio("/reindev/assets/audio/click.mp3").play();
  });
});
