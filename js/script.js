/*===== toggle icon navbar =====*/

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*===== scroll sections active link =====*/

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*===== sticky navbar =====*/

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*===== remove toggle icon and navbar when click navbar link (scroll) =====*/

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*===== scroll reveal =====*/

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .section-header", { origin: "top" });
ScrollReveal().reveal(".skill-title", {
  opacity: 0,
  distance: "0px",
  duration: 1000,
});
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(
  ".home-content h1, .about-img, .bar-container, .left-animation, .interest",
  {
    origin: "left",
  }
);
ScrollReveal().reveal(".skill-name", {
  origin: "left",
  duration: 500,
});
ScrollReveal().reveal(".home-content p, .about-content, .right-animation", {
  origin: "right",
});
ScrollReveal().reveal(".skill-rating", {
  origin: "right",
  duration: 500,
});
ScrollReveal().reveal('.scaleUp', { scale: 0.85 });

/*===== typed js =====*/

const typed = new Typed(".multiple-text", {
  strings: [
    "Back-end Developer",
    "Front-end Developer",
    "Communications Engineer",
    "Creative Writer",
    "Logo Designer",
    "UI/UX Designer",
    "Graphic Designer",
    "VFX Artist",
    "Database Administrator",
    "Web Developer",
    "Mobile App Developer",
    "Video Editor",
    "Foodie",
    "Bookworm",
    "Cinephile",
    "Hiker",
  ],
  typeSpeed: 20,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
});

/*===== carousel =====*/

document.querySelectorAll(".carousel_container").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel_item");
  const buttonHtml = Array.from(items, () => {
    return `<span class="carousel_btn"></span>`;
  });
  carousel.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel__nav">${buttonHtml.join("")}</div>`
  );

  const carouselBtns = carousel.querySelectorAll(".carousel_btn");

  let currentPosition = 1;

  carouselBtns[currentPosition].classList.add("carousel_btn--selected");

  const buttonLeft = document.querySelector("#carousel-left");
  const buttonRight = document.querySelector("#carousel-right");

  const handleUpdate = () => {
    items.forEach((item) => item.classList.remove("carousel_item--selected"));
    carouselBtns.forEach((carouselBtn) =>
      carouselBtn.classList.remove("carousel_btn--selected")
    );

    carouselBtns[currentPosition].classList.add("carousel_btn--selected");
    items[currentPosition].classList.add("carousel_item--selected");
  };

  buttonLeft.addEventListener("click", () => {
    if (currentPosition > 0) {
      currentPosition--;
    } else {
      currentPosition = carouselBtns.length - 1;
    }

    handleUpdate();
  });

  buttonRight.addEventListener("click", () => {
    if (currentPosition < carouselBtns.length - 1) {
      currentPosition++;
    } else {
      currentPosition = 0;
    }

    handleUpdate();
  });

  carouselBtns.forEach((carouselBtn, i) => {
    carouselBtn.addEventListener("click", () => {
      currentPosition = i;
      // un-select all the items
      items.forEach((item) => item.classList.remove("carousel_item--selected"));
      carouselBtns.forEach((carouselBtn) =>
        carouselBtn.classList.remove("carousel_btn--selected")
      );

      items[i].classList.add("carousel_item--selected");
      carouselBtn.classList.add("carousel_btn--selected");
    });
  });
});
