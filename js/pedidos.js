
let carrinho = [];

const botoesAdicionar = document.querySelectorAll(".add-product");
const areaCarrinho = document.querySelector("#cart-items");
const elementoTotal = document.querySelector("#cart-total");

botoesAdicionar.forEach(function(botao){
    botao.addEventListener("click",function(){
        const produtoHTML = botao.closest(".order-product");
        
        const nome = produtoHTML.dataset.name;
        const preco = Number(produtoHTML.dataset.price);

        const produto = {
            nome: nome,
            preco: preco,
            quantidade: 1
        };
        carrinho.push(produto);

        renderizarCarrinho();
    });

    });

    function renderizarCarrinho(){
        areaCarrinho.innerHTML = "";
        let total = 0;

        carrinho.forEach(function(produto,indice){
            const subtotal = produto.preco * produto.quantidade;
            total += subtotal;
            const item = document.createElement("div");
            item.classList.add("cart-item");
            item.innerHTML = `
            <p><strong>${produto.nome}</strong></p>
            <p>Quantidade: ${produto.quantidade}</p>
            <p>Subtotal: ${subtotal.toLocaleString("pt-BR",{
                style: "currency",
                currency: "BRL"
            })}</p>
            <button class="remove-product" data-index="${indice}">
            Remover
            </button>
        `;
            areaCarrinho.appendChild(item);

        });
        elementoTotal.textContent = total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"

        });
        if (carrinho.length === 0){
            areaCarrinho.textContent = "Nenhum produto adicionado ";

        }
    };

