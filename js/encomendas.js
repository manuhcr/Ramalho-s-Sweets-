let encomenda_cliente = document.querySelectorAll(".encomenda-cliente")
for (i = 0; i < encomenda_cliente.length; i++) {
     let clientes = encomenda_cliente[i];
     console.log(clientes)
     // pega cada elemento filho do td
     // quantidade
     let tab_qtd = clientes.children[2].textContent
     // valor unitário
     let tab_unitario = clientes.children[3].textContent
     console.log(tab_qtd)
     console.log(tab_unitario)

     if (tab_qtd < 1 || isNaN(tab_qtd)) {
          // qtd é menor que 1 ou não é numérica
          clientes.children[2].textContent = "Quantidade inválida!";
          clientes.classList.add("info-invalida");

     } else if (tab_unitario <= 0 || isNaN(tab_unitario)) {
          // qtd é menor que 1 ou não é numérica
          clientes.children[3].textContent = "Valor unitário inválido!";
          clientes.children[3].classList.add("texto-erro");
     } else {
          clientes.children[4].textContent = calculaTotal(tab_qtd, tab_unitario)
          clientes.children[3].textContent = formataValor(parseFloat(tab_unitario))

     }

}

function calculaTotal(qtd, unitario) {
     let total = 0
     total = qtd * unitario;
     return formataValor(total);
}
// converte os valores para (R$)
function formataValor(valor) {
     let valor_formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
     return valor_formatado
}