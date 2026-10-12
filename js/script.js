<h2 id="titulo">Olá!</h2>

<button id="botao">Mudar texto</button>


const titulo = document.querySelector("#titulo");
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    titulo.textContent = "Bem-vinda à confeitaria!";
})