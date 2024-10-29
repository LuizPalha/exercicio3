let precoProduto = 220.40
let condicaoPgto = ["a vista", "dinheiro ou pix", "parcelado 2x", "parcelado em mais de 2x"]
// a operadora de caixa devera selecionar 0 = a vista ; 1 = dinheiro ou pix ; 2 = parcelado 2x ; 3 = parcelado em mais de 2x 
let escolhaCond = condicaoPgto[3]
let qtdparcelas = 5
let precoFinal

if (condicaoPgto[0]) {
    console.log("Voce ganha 10% de desconto")
    precoFinal = precoProduto - 10 * (10 / 100)
}
else if (condicaoPgto[1]) {
    console.log("Voce ganha 15% de desconto")
    precoFinal = precoProduto - 10 * (15 / 100)
}
else if (condicaoPgto[2]) {
    console.log("Voce ganha 10% de desconto")
    precoFinal = precoProduto
}
else if (condicaoPgto[3]) {
    console.log("acrescimo de 10%")
    precoFinal = precoProduto + 10 * (10 / 100)
}
let precoParcela = precoFinal / qtdparcelas

console.log("A condicao de pagamento escolhida pelo cliente foi " + escolhaCond + " , e o preco final sera R$ " + precoFinal.toFixed(2))
console.log("Quantidade de parcelas escolhida = " + qtdparcelas)
if (qtdparcelas >= 2) {
    console.log("O parcelamento ficou " + qtdparcelas + " parcelas de R$ " + precoParcela.toFixed(2))
}
else if (qtdparcelas <= 1) {
    console.log("Nao houve parcelamento")
}
