let qtd = document.querySelectorAll(".qtd")
let unidade = document.querySelectorAll(".unitario")
let preço = parseFloat(unidade.replace(',' , '.'));
let resultado = preço * qtd
let round = resultado.toFixed(2).replace('.' , ',')
let total = document.querySelector('.total').innerHTML = round