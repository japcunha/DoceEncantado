
let carrinho = [];

const botoesAdicionar = 
document.querySelectorAll(".add-product");

botoesAdicionar.forEach(function(botao) {
    botao.addEventListener("click", function() {
    console.log("Produto adicionado");

    })
});