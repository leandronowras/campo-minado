const Tabuleiro = require('./Tabuleiro')

const tabuleiro = new Tabuleiro()
console.table(tabuleiro.tabuleiro)
tabuleiro.jogada(1, 'B')
console.table(tabuleiro.tabuleiro)
tabuleiro.jogada(2, 'D')
console.table(tabuleiro.tabuleiro)
tabuleiro.jogada(10, 'J')
console.table(tabuleiro.tabuleiro)