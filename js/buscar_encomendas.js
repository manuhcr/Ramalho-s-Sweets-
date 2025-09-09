let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    let costumers = document.querySelectorAll(".encomenda-cliente");
    // Verifica se tem info para busca
    if (this.value.length > 0) {
        //Há filtro de busca
        for (let costumer = 0; costumer < costumers.length; costumer++) {
            let cliente = costumers[costumer];
            let nome = cliente.querySelector(".nome").textContent;
            // Cria uma expressão regular (regex) usando o que foi digitado no input
            // "this.value" pega o valor atual do campo (por exemplo, "Ana")
            // O "i" significa que a busca é case-insensitive (não diferencia maiúsculas e minúsculas)
            let expressao = new RegExp(this.value, "i")

            //Verifica se o nome digitado é igual ao do contador
            if (!expressao.test(nome)) {
                //Torma invisivel
                cliente.classList.add("invisivel")
            } else {
                // Deixa visivel
                cliente.classList.remove("invisivel")
            }
        }
    } else {
        //Não há filtro de busca, exibe lista completa
        for (let costumer = 0; costumer < costumers.length; costumer++) {
            costumers[costumer].classList.remove("invisivel");
        }
    }

})