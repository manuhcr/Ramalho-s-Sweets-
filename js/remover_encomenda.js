let table = document.querySelector("table");

//Escuta o duplo clique na linha que será excluida
table.addEventListener("dblclick", function (event) {
    //Pega o elemento pai daquilo que foi clicado
    console.log(event.target.parentNode);

    //Adiciona o efeito na linha
    event.target.parentNode.classList.add("fadeOut");
    //Exclui a linha clicada
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 600);

});