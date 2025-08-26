let botaoAdd = document.querySelector("#add");

botaoAdd.addEventListener("click", function (event) {
    //event.preventDefault(); espera a proxima linha do código
    event.preventDefault();
    console.log("Botão Clicado")
    criaLinha();
})

let nome = document.querySelector("#nome").textContent;
let qtd = document.querySelector("#qtd").textContent;
let doce = document.querySelector("#doce").textContent;
let unitario = document.querySelector("#unit").textContent;

let linha = document.createElement("tr");
let coluna = document.createElement("td");
let tabela = document.querySelectorAll(".tabela-clientes")
console.log(tabela)

function criaLinha() {
    linha.appendChild(coluna)
    tabela.t
    
}