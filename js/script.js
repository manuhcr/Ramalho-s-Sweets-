// script.js
let indice = 0; // Índice do slide atual
const slider = document.querySelectorAll('.slide'); // Seleciona todos os slides
const totalSlides = slider.length; // Conta o total de slides (indice 0 , 1 e 2)

// Função para mover o slide de scordo com o parâmetro step
function moverSlide(passo) {
    indice += passo;  // Atualiza o índice com o valor de "passo" (1 para avançar, -1 para voltar)

    if (indice >= totalSlides) // Se o indice for maior ou igual ao numero total de slides
    {
        indice = 0;  // Volta para o primeiro slide
    } else if (indice < 0) // Se o indice for menor q 0, ou seja, se estiver no primeiro slide
    {
        indice = totalSlides - 1;  //Avança para o último slide
    }

    // Move a posição da .slider para mostrar o slide correto (0% , -100% ou -200% (índice 0, 1 e 2))
    document.querySelector('.slider').style.transform = `translateX(-${indice * 100}%)`;

}

// Função para avançar automaticamente
function autoMove() {
    moverSlide(1);  // Avança um slide
}

// Configurar o intervalo automático para mudar de slide a cada 3 segundos
setInterval(autoMove, 4000);

// Garantir que o primeiro slide seja exibido ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    moverSlide(0);  // Exibe o primeiro slide
});


function abrirModal(tipo)  //Modal abre dependendo do tipo de doce(parâmetro)
{
    var conteudo = "";

    if (tipo == "bolos") {
        conteudo = `
        <h1 style = "text-align: center;"> Bolos e tortas </h1>
            <ul>
                <li> <img src = "imagens/pedaco-de-bolo.png" alt="cake"/> Bolo de chocolate com cobertura cremosa – <strong>R$ 49,90 (1kg)</strong></li>
                <li><img src = "imagens/pedaco-de-bolo.png" alt="cake"/> Bolo de morango com chantilly – <strong>R$ 54,90 (1kg)</strong></li>
                <li><img src = "imagens/pedaco-de-bolo.png" alt="cake"/> Bolo de cenoura com calda de chocolate – <strong>R$ 44,90 (1kg)</strong></li>
                <li><img src = "imagens/pedaco-de-bolo.png" alt="cake"/> Bolo Red Velvet com cream cheese – <strong>R$ 64,90 (1kg)</strong></li>
                <li><img src = "imagens/pedaco-de-bolo.png" alt="cake"/> Cheesecake de frutas vermelhas – <strong>R$ 69,90 (1kg)</strong></li>
                <li><img src = "imagens/pedaco-de-bolo.png" alt="cake"/> Torta holandesa – <strong>R$ 59,90 (1kg)</strong></li>
                <li><img src = "imagens/pedaco-de-bolo.png" alt="cake"/> Torta de limão com merengue – <strong>R$ 49,90 (1kg)</strong></li>
                <li><img src = "imagens/pedaco-de-bolo.png" alt="cake"/> Torta de maçã caramelizada – <strong>R$ 55,90 (1kg)</strong></li>
            </ul>
        `;
    } else if (tipo == "doces") {
        conteudo = `
         <h1 style = "text-align: center;"> Doces Brasileiros </h1>
            <ul>
                <li> <img  src = "imagens/brigadeiro.png" alt="candy"/> Brigadeiro gourmet (tradicional, branco, pistache, etc) – <strong>R$ 3,50 (unidade)</strong></li>
                <li><img  src = "imagens/brigadeiro.png" alt="candy"/> Beijinho de coco – <strong>R$ 3,00 (unidade)</strong></li>
                <li><img  src = "imagens/brigadeiro.png" alt="candy"/> Cajuzinho – <strong>R$ 3,00 (unidade)</strong></li>
                <li><img  src = "imagens/brigadeiro.png" alt="candy"/> Bicho de pé – <strong>R$ 3,50 (unidade)</strong></li>
                <li><img  src = "imagens/brigadeiro.png" alt="candy"/> Palha italiana – <strong>R$ 5,00 (unidade)</strong></li>
                <li><img  src = "imagens/brigadeiro.png" alt="candy"/> Quindim <strong>– R$ 6,50 (unidade)</strong></li>
                <li><img  src = "imagens/brigadeiro.png" alt="candy"/> Cocada (branca, queimada, com leite condensado)  <strong> – R$ 4,50 (unidade)</strong></li>
                <li><img  src = "imagens/brigadeiro.png" alt="candy"/> Canjica doce <strong>– R$ 9,90 (250g)</strong></li>
            </ul>
        `;
    } else if (tipo == "colddesserts") {
        conteudo = `
         <h1 style = "text-align: center;"> Sobremesas Geladas </h1>
         <ul>
            <li><img  src = "imagens/sorvete.png" alt="icecream"/> Pavê de chocolate – <strong>  R$ 49,90 (1kg) </strong></li>
            <li><img  src = "imagens/sorvete.png" alt="icecream"/> Mousse de maracujá – <strong> R$ 7,90 (taça)</strong></li>
            <li><img  src = "imagens/sorvete.png" alt="icecream"/> Mousse de chocolate com raspas – <strong> R$ 8,90 (taça)</strong></li>
            <li><img  src = "imagens/sorvete.png" alt="icecream"/> Torta gelada de morango – <strong>R$ 54,90 (1kg)</strong></li>
            <li><img  src = "imagens/sorvete.png" alt="icecream"/> Sorvete artesanal de diferentes sabores – <strong>R$ 12,90 (pote 500ml)</strong></li>
            <li><img  src = "imagens/sorvete.png" alt="icecream"/> Geladinho gourmet (morango com ninho, ninho com chocolate, abacaxi com coco, etc)  – <strong>R$ 5,00 (unidade)</strong></li>    
         </ul>

        `
    } else if (tipo == "chocoandbrownie") {
        conteudo = ` 
         <h1 style = "text-align: center;"> Chocolates e Brownies </h1>
         <ul>
            <li><img  src = "imagens/chocolate.png" alt="chocolate"/> Brownie de chocolate – <strong>  R$ 7,90 (unidade) </strong></li>
            <li><img  src = "imagens/chocolate.png" alt="chocolate"/> Brownie recheado (Nutella, doce de leite, Oreo) – <strong> R$ 9,90 (unidade)</strong></li>
            <li><img  src = "imagens/chocolate.png" alt="chocolate"/> Cookie recheado com chocolate – <strong> R$ 6,50 (unidade)</strong></li>
            <li><img  src = "imagens/chocolate.png" alt="chocolate"/> Trufas de chocolate (tradicional, ninho, nutella, sensação, etc) – <strong>R$ 4,90 (unidade)</strong></li>
            <li><img  src = "imagens/chocolate.png" alt="chocolate"/> Barrinha de chocolate caseira – <strong>R$ 7,50 (unidade)</strong></li>  
         </ul>


       `
    } else {
        conteudo = `
         <h1 style = "text-align: center;"> Doces Especiais </h1>
         <ul>
            <li> <img  src = "imagens/doces.png" alt="sweets"/> Macarons coloridos – <strong> R$ 5,50 (unidade) </strong></li>
            <li> <img  src = "imagens/doces.png" alt="sweets"/> Churros – <strong> R$ 7,90 (unidade) </strong> e com coberturas e acompanhamentos como: nuttela ou doce de leite e ninho, nuttela ou doce de leite e morango, nutella ou doce de leite e paçoca, etc  <strong> (R$ 0,50) </strong></li>
            <li> <img  src = "imagens/doces.png" alt="sweets"/> Rabanada açucarada – <strong> R$ 6,50 (unidade) </strong></li>
            <li> <img  src = "imagens/doces.png" alt="sweets"/> Waffle com calda e frutas – <strong> R$ 14,90 (prato)</strong> com calda de chocolate ou mel e frutas frescas como: morangos, bananas, uvas e kiwis.</li>
            <li> <img  src = "imagens/doces.png" alt="sweets"/> Donuts  – <strong>  R$ 8,90 (unidade) </strong> com cobertura de glacê de açúcar e opções de recheio, como doce de leite, nutella ou creme de baunilha.</li>
        </ul>
        `
    }

    document.getElementById("modalcardapio-Conteudo").innerHTML = conteudo; // Exibe a lista do cardápio ul li pelo innerhtml (que vai para o index.html)
    document.getElementById("modalcardapio").style.display = "flex"; // Exibe o conteúdo do modal cardápio

}

function fecharModal() {
    document.getElementById("modalcardapio").style.display = "none"; // Fecha o modal através do estilo display: none; (esse estilo faz o modal sumir)
}

window.onscroll = function () {
    const navbar = document.getElementById("navbar");

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        navbar.style.backgroundColor = "#A86B49";
        navbar.style.transition = "all 0.2s ease-in"
    } else if (document.body.scrollTop < 200 || document.documentElement.scrollTop < 200) {
        navbar.style.backgroundColor = "#EB8D96";
    }
};
const links = document.querySelectorAll(".links");

links.forEach(link => {
    link.onmouseover = () => {
        link.style.color = "#f3cfcf"; // rosa
        link.style.textShadow = "1px 1px 3px rgb(39, 16, 0)";
        link.style.transition = "all 0.2s ease-in"
    };

    link.onmouseout = () => {
        link.style.color = "#ffffff"; // cor padrão
        link.style.textShadow = "none";
    };
});

//form contato 
document.getElementById('frmContato').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    const nomeSobrenome = document.getElementById('nomesobrenome').value;
    const email = document.getElementById('email').value;
    const receberEmail = document.getElementById('receberEmail').checked;

    let mensagemFinal = `Olá, ${nomeSobrenome}! Agradecemos o seu contato.`;

    const motivoContatoSelecionado = document.getElementById('motivoContato'); // Pega o SELECT
    const contatoPreferido = document.querySelector('input[name="Contato"]:checked');
    let formaDeContato = ''; // para armazenar a mensagem
    if (contatoPreferido) {
        const tipoContato = contatoPreferido.value;

        if (tipoContato === 'radio-mail') {

            formaDeContato = `pelo seu email`;

        } else if (tipoContato === 'radio-telefone') {

            formaDeContato = `pelo seu telefone`;

        } else if (tipoContato === 'radio-whatsapp') {

            formaDeContato = `pelo seu WhatsApp`;
        }

    }
    const motivo = motivoContatoSelecionado.value;
    if (motivoContatoSelecionado) {

        if (motivo === "0") {
            mensagemFinal += ` Você não especificou o motivo da sua mensagem. Fale com a gente ${formaDeContato}.`;
        } else if (motivo === "1") {
            mensagemFinal += ` Qual a sua dúvida? Fale para a gente ${formaDeContato}. `;
        } else if (motivo === "2") {
            mensagemFinal += ` Qual a sua sugestão? Conta para a gente ${formaDeContato}. `;
        } else if (motivo === "3") {
            mensagemFinal += `Obrigada pelo elogio! Ficamos felizes que você gostou dos nossos serviços`;
        } else {
            mensagemFinal += `Poxa! Sinto muito que você não gostou dos nossos serviços...Sua opinião é muito importante para nós e gostaríamos de saber mais detalhes para corrigir qualquer falha.`
        }
    }
    if (receberEmail && (!contatoPreferido || contatoPreferido.value !== 'radio-mail') && (motivo === "0" || motivo === "1" || motivo === "2" || motivo === "3")) {
        mensagemFinal += ` Você receberá nossas novidades no seu e-mail ${email}.`;
    }
    const divRetorno = document.getElementById('divRetorno');
    const mensagemRetorno = document.getElementById('mensagemRetorno');
    mensagemRetorno.innerHTML = mensagemFinal;
    divRetorno.style.display = 'block'; // Mostra a div de retorno
});