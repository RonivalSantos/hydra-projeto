const mobileBtn = document.querySelector(".mobile-btn");
const mobileMenu = document.querySelector(".mobile-navigation");
mobileBtn.onclick = () => {
  mobileMenu.classList.toggle("ativo");
  mobileBtn.classList.toggle("trocar");
};

const leftBtn = document.querySelector(".botao-esquerdo");
const rightBtn = document.querySelector(".botao-direito");
const local = document.querySelector(".local");
const telefone = document.querySelector(".telefone");
const email = document.querySelector(".email");

rightBtn.onclick = () => {
  telefone.classList.add("primeiro");
  local.classList.remove("primeiro");
};
// rightBtn.onclick = (evento) => {
//   if ((evento = 1)) {
//     telefone.classList.add("primeiro");
//     local.classList.remove("primeiro");
//   }
// };
