class createColuna {
    constructor(valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10) {
        this.A = valor1;
        this.B = valor2;
        this.C = valor3;
        this.D = valor4;
        this.E = valor5;
        this.F = valor6;
        this.G = valor7;
        this.H = valor8;
        this.I = valor9;
        this.J = valor10;
    }
}


var tabuleiro = {};

const linha = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
tabuleiro[linha[0]] = new createColuna("[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]");
tabuleiro[linha[1]] = new createColuna("[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]");
tabuleiro[linha[2]] = new createColuna("[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]");
tabuleiro[linha[3]] = new createColuna("[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]");
tabuleiro[linha[4]] = new createColuna("[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]");
tabuleiro[linha[5]] = new createColuna("[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]");
tabuleiro[linha[6]] = new createColuna("[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]");
tabuleiro[linha[7]] = new createColuna("[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]");
tabuleiro[linha[8]] = new createColuna("[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]");
tabuleiro[linha[9]] = new createColuna("[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]");


function Jogada(linha, coluna) {
    tabuleiro[linha] = new createColuna("[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]");
    tabuleiro[linha][coluna] = "[X]"
}

Jogada("7", "B")
Jogada("4", "B")
Jogada("2", "F")
Jogada("1", "G")


console.table(tabuleiro);