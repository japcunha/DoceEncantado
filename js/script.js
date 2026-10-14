

const titulo = document.querySelector("#titulo");
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    titulo.textContent = "Bem-vinda à confeitaria!";
})