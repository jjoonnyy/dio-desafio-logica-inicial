
//Desafio 2 - Calculadora de partidas Rankeadas

totalPartidas()


function totalPartidas() {
    let qtdadeVitorias = 101
    let qtdadeDerrotas = 80
    let qtdadePartidas = qtdadeVitorias + qtdadeDerrotas
    const saldoHankeadas = qtdadeVitorias - qtdadeDerrotas

    calculoHank(saldoHankeadas)
}

function calculoHank(saldoHankeadas) {
    let nivel = ""
    

     if (saldoHankeadas <= 10) {
        nivel = "Ferro"
    } else if (saldoHankeadas > 10 && saldoHankeadas <= 20) {
        nivel = "Bronze"
    } else if (saldoHankeadas > 20 && saldoHankeadas <= 50) {
        nivel = "Prata"
    } else if (saldoHankeadas > 50 && saldoHankeadas <= 80) {
        nivel = "Ouro"
    } else if (saldoHankeadas > 80 && saldoHankeadas <= 90) {
        nivel = "Diamante"
    } else if (saldoHankeadas > 90 && nivel <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    exibirHank(saldoHankeadas, nivel)
}

function exibirHank(saldoHankeadas, nivel){
    console.log("O Herói tem " + saldoHankeadas + " de saldo e está no nível de " + nivel)
}