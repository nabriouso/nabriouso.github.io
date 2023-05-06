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
  "Waking up so relieved!",
  "Based and fox-pilled!",
  "Thousands of colors!",
  "You look awesome!",
  "Rock and Stone!",
  "Dopefish lives!",
  "50% Notch code, 50% foxes!",
  "Now with cheesy lava!",
  "Replaced molten cheese with blood?",
  "Absolutely proprietary!",
  "Sentry down!",
  "You're valid!",
  "Don't crack eggs, build nests!",
  "Look mom, no head!",
  "Past from the blast!",
  "Out of this world!",
  "Build taller!",
  "Build deeper!",
  "Build bigger!",
  "Gears and Cogs!",
  "Forge free!",
  "Radical!",
  "No more nuzzles!",
  "The sky is *far* from the limit!",
  "Now with more watermolne!",
  "[input funny text here]",
  "Astolfo!",
  "Forklift certified!",
  "100% dragon free... Again!",
  "Coconut doggy!",
  "Risugami free!",
  "Explosive!",
  "Flower cows!",
  "Wyverns aren't dragons!",
  "Camo Regrow Fortified Ceramics!",
  "Now with actual oceans!",
  "Putting foxes in buckets!",
  "Putting the 'Re' in hexylresorcinol!",
  "No longer 100% dragon free!",
  "A wrench and a few slabs!",
  "Botched pig code!",
  "Tastes like 2010!",
  "Lambda controls!",
  "Ran by foxes!",
  "Build up!",
  "We didn't start the fire!",
  "Your grandma's Minecraft, reimagined!",
  "Entirely frogless!",
  "Heed my words!",
  "Build better!",
  "Be yourself!",
  "In case it isn't obvious, foxes aren't players.",
  "Quasi-connectivity included!",
  "The best part of waking up!",
  "Egg-plenty!",
  "100% Redstone free!",
  "Colored crates and logic gates!",
  "A fine addition to my collection!",
  "All our food keeps blowing up!",
  "Fumo? Fumo.",
  "Refridgifreezed!",
  "Better than Indev (probably)!",
  "Put on the maid outfit!",
  "Special Spaghetti Code Edition!",
  "Merp included!",
  "Except in Nebraska!",
  "Recommended by 9 out of 10 dentists!",
  "Now with 100% more denim!",
  "Don't forget your keys!",
  "Absolutely Dopefish-Free!",
  "Asbestos-Flavored!",
  "Marketplace not included!",
  "Now with NBT!",
  "Eye-catching 3D graphics!",
  "Wasp marbles included!",
  "Always here for all your fox needs!",
  "Filled to the brim with neologisms!",
  "Always knows your location!",
  "Get Psyched!",
  "Modded!",
  "Not for browsers!",
  "Cubic chunks!",
  "Vulpes vulpes!",
  "Surprisingly infinite worlds!",
  "Not an Indev mod!",
  "Score: &e0!",
  "Now with furnaces!",
  "Dungeon Parties!",
  "Game over man, game over!",
  "Try our sister mod, ReOutdev!",
  "Localized entirely within your kitchen!",
  "Cogs in the machine!",
  "99% dragon-free!",
  "Foxes and wasps and wyverns, oh my!",
  "You must dye!",
  "idspispopd!",
  "What grinds my gears!",
  "Incinerated!",
  "Blue roses too!",
];

function generatePool() {
  const randomString = pool[Math.floor(Math.random() * pool.length)];
  document.getElementById("random-pool").textContent = randomString;
}
document.addEventListener("DOMContentLoaded", generatePool);

const click_sound = new Audio("/reindev/assets/audio/click.mp3");
click_sound.addEventListener("canplaythrough", () => {
  document.querySelectorAll("[data-play-sound='true']").forEach((button) => {
    button.addEventListener("click", () => {
      click_sound.currentTime = 0;
      click_sound.play();
    });
  });
});

const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);

document.querySelectorAll(".tooltip-trigger").forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    const tooltipText = element.getAttribute("data-tooltip-title");
    tooltip.innerHTML = `<span class="tooltip-text">${tooltipText}</span>`;
    tooltip.classList.add("active");
  });

  element.addEventListener("mouseout", (e) => {
    tooltip.classList.remove("active");
  });

  element.addEventListener("mousemove", (e) => {
    tooltip.style.transform = `translate3D(${e.clientX + 10}px, ${
      e.clientY - 20
    }px, 0)`;
  });
});
