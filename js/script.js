const mobileBtn = document.querySelector(".mobile-btn");
const mobileMenu = document.querySelector(".mobile-navigation");
mobileBtn.onclick = () => {
  mobileMenu.classList.toggle("ativo");
  mobileBtn.classList.toggle("trocar");
};

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// const leftBtn = document.querySelector(".botao-esquerdo");
// const rightBtn = document.querySelector(".botao-direito");
// const local = document.querySelector(".local");
// const telefone = document.querySelector(".telefone");
// const email = document.querySelector(".email");

// rightBtn.onclick = () => {
//   telefone.classList.add("primeiro");
//   local.classList.remove("primeiro");
// };
// // rightBtn.onclick = (evento) => {
// //   if ((evento = 1)) {
// //     telefone.classList.add("primeiro");
// //     local.classList.remove("primeiro");
// //   }
// // };
