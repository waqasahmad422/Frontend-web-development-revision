window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");

  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.transition = "0.6s ease";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);

  }, 1500);
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});