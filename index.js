// read more button
const readMore = document.querySelector(".read-more");
const readLess = document.querySelector(".read-less");
const moreText = document.querySelector(".therapy_read-more");
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();

readMore.addEventListener("click", () => {
  console.log("clicked");
  moreText.classList.add("visible");
  readMore.style.display = "none";
  readLess.style.display = "block";
});

readLess.addEventListener("click", () => {
  moreText.classList.remove("visible");
  readMore.style.display = "block";
  readLess.style.display = "none";
});

// back to top button
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  const scrollPercent =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  if (scrollPercent >= 40) {
    backToTopBtn.style.opacity = "1";
  } else {
    backToTopBtn.style.opacity = "0";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// nav link underline
const links = document.querySelectorAll(".primary-navigation li a");
links.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    this.classList.add("underline");
  });
  link.addEventListener("mouseleave", function () {
    this.classList.remove("underline");
  });
});

// copyright
year.textContent = currentYear;
