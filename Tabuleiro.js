var tabuleiro = {};

class createColuna {
    // colunaName = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    constructor([valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10]) {
        // for (let i = 0; i < valor.length; i++) {
        //     this.colunaName[i] = valor[i] 
        // }
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

const linha = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

function createBoard(tamanho) {
    let coluna = []

    for (let i = 0; i < tamanho; i++) {
        coluna.push("[ ]")
    }  
    for (let i = 0; i < tamanho; i++) {
        tabuleiro[linha[i]] = new createColuna(coluna);
    }
}
createBoard(10)


function Jogada(linha, coluna) {
    tabuleiro[linha] = new createColuna(["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"]);
    tabuleiro[linha][coluna] = "[X]"
}

Jogada("7", "B")
Jogada("4", "B")
Jogada("2", "F")
Jogada("1", "G")

module.exports = tabuleiro



// class Tabuleiro {
//     constructor() {
//         this.createColuna() 
//     }

//     createColuna([valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10]) {
//         this.A = valor1;
//         this.B = valor2;
//         this.C = valor3;
//         this.D = valor4;
//         this.E = valor5;
//         this.F = valor6;
//         this.G = valor7;
//         this.H = valor8;
//         this.I = valor9;
//         this.J = valor10;
//     }
// }