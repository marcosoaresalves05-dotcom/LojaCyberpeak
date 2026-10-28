// ===== 1. DADOS: array de objetos =====
let produtos = [
  { nome: "Teclado Akko Tac Fun 75",      categoria: "Periféricos",  preco: 200.88,  imagem: "img/test2-removebg-preview.png" },
  { nome: "Moletom Código",    categoria: "Carregador turbo Tipo C",  preco: 27.00, imagem: "img/moletom.svg", },
  { nome: "Caneca Café&Code",  categoria: "Casa",       preco: 34.5,  imagem: "img/caneca.svg",  },
  { nome: "Garrafa Térmica",   categoria: "Casa",       preco: 79.0,  imagem: "img/garrafa.svg", },
  { nome: "Caneta Amarela",    categoria: "Papelaria",  preco: 4.5,   imagem: "img/caneta.svg",  },
  { nome: "Caderno de Ideias", categoria: "Papelaria",  preco: 24.9,  imagem: "img/caderno.svg", }
];
 
let carrin = [];
function formatarPreco(valor) {
    return"R$ " +
    valor.toFixed(2).replace(".", ",");
}

function mostruario() {
    let html = "";

    for (let i = 0; i<produtos.length; i++) {
        let p = produtos[i];

        {
            html += `
                <article class="produto">
                    <img src"${p.imagem}" alt="${p.nome}">
                    <div class="corpo">
                        <span class="categoria">${p.categoria}</span>
                        <h3>${p.nome}</h3>
                        <span class="preco">${formatoPreco(p.preco)}</span>
                        <div class="botoes">
                            <button class="btn-add" onclick="carrinhar(${i})">Adicionar</button>
                        </div>
                    </div>
                </article>`;
        }

        document.getElementById("vitrine").innerHTML = html;

    }
}

let carrin = [];

function carrinhar(posicao){
    carrin.push(produtos[posicao]);
    atualizarCarrinho()
}
function descarrinhar(posicao){
    carrin.splice(posicao, 1);
    atualizarCarrinho();
}
function limparCarrinho()

function atualizarCarrinho(){
    let total = 0;
    let html = "";
}

mostruario();