class Tabuleiro {
    tabuleiro = {};
    linha = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    colunasTets = ['A', 'B', 'C', 'E','D', 'F', 'G', 'H', 'I', 'J']
    coluna = []

    constructor() {
        this.createBoard(10)
    }
    
    createBoard(tamanho) {
        for (let i = 0; i < tamanho; i++) {
            this.coluna.push("[ ]")
        }  
        for (let i = 0; i < tamanho; i++) {
            this.tabuleiro[this.linha[i]] = new CreateColuna(this.coluna)
        }
    }

    jogada(linha, coluna) {
        this.tabuleiro[linha] = new CreateColuna(["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"]);
        this.tabuleiro[linha][coluna] = "[X]"
    }
}

class CreateColuna {
    constructor([valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10]) {
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

module.exports = Tabuleiro