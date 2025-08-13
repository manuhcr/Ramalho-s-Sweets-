let encomenda_cliente = document.querySelectorAll(".encomenda-cliente")
for(i=0; i < encomenda_cliente.length; i++) {
     let clientes = encomenda_cliente[i];
     console.log(clientes)
     // pega cada elemento filho do td
     let qtd = clientes.children[2]. textContent 
     let unitario = clientes.children[3].textContent 
     console.log(qtd)
     console.log(unitario)
     let num_qtd = parseInt(qtd)
     let num_unitario = parseFloat(unitario.replace(',', '.'))
     let resultado = num_qtd * num_unitario; // armazena cada resultado
     console.log(resultado)
     clientes.children[4].textContent = resultado.toFixed(2)
}
