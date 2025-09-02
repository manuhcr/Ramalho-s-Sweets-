let botaoAdd = document.querySelector("#add");
let nome = document.querySelector("#nome").textContent;
let qtd = document.querySelector("#qtd").textContent;
let doce = document.querySelector("#doce").textContent;
let unitario = document.querySelector("#unit").textContent;



botaoAdd.addEventListener("click", function (event) {
    //event.preventDefault(); espera a proxima linha do código
    event.preventDefault();
    let form = document.querySelector("#frmContato");
    //Pega o novo pedido
    let novoPedido = obtemEncomenda(form);
    //Pega a tabela de pedidos
    let tabela = document.querySelector(".tabela-clientes")
    //Insere novo pedido na tabela
    tabela.appendChild(criaLinha(novoPedido));

    //Limpa form 
    form.reset();
})

//Função para criar nova coluna
function criaColuna(dadoColuna) {
    let coluna = document.createElement("td");
    coluna.textContent = dadoColuna;
    return coluna;
}

//Função para criar nova linha
function criaLinha(dadosnovaEncomenda) {
    let linha = document.createElement("tr");
    linha.appendChild(criaColuna(dadosnovaEncomenda.nome));
    linha.appendChild(criaColuna(dadosnovaEncomenda.doce));
    linha.appendChild(criaColuna(dadosnovaEncomenda.qtd));
    linha.appendChild(criaColuna("R$ " + formataValor(dadosnovaEncomenda.unit)));
    linha.appendChild(criaColuna(calculaTotal(dadosnovaEncomenda.qtd, dadosnovaEncomenda.unit)));


    return linha;

}

function obtemEncomenda(formulario) {
    let encomendaDoce = {
        nome: formulario.nome.value,
        qtd: formulario.qtd.value,
        doce: formulario.doce.value,
        unit: formulario.unit.value
    }
    return encomendaDoce;
}



