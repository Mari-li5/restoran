// Находим кнопку
const scrollTopBtn = document.getElementById("scrollTopBtn");
 
// Показываем кнопку при прокрутке вниз
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});
 
// Плавный скролл наверх
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
 