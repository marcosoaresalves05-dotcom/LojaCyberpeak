let itens = 0;

function proCarrinho(produto) {
    itens = itens + 1;
    document.getElementById("contador").textContent = itens;
    document.getElementById("aviso").textContent = produto + " Adicionado ao carrinho"
}