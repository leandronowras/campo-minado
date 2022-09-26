const http = require('http')
const express = require('express')
const { Server } = require('socket.io')
const cors = require('cors')
const Tabuleiro = require('./Tabuleiro')
const tabuleiro = new Tabuleiro()

const app = express()
app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", 
        methods: ["GET", "POST"]
    }
})

server.listen(4000, () => {
    console.log('server is running')
})

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('messageFromServer', (arg1, arg2, callback) => {
        callback({
            data: tabuleiro.tabuleiro
        })
        }
    )

    socket.on('jogada', (dadosDaJogada) => {
        let coluna = dadosDaJogada.message[1]
        let linha = dadosDaJogada.message[0]
        tabuleiro.jogada(linha, coluna)
    })

    socket.on('send_message', (data) => {
        console.log(data)
    })
})

// focar sempre no que eh esperado do jogo BATALHA NAVAL

// TODO: atualmente eh um tabuleiro pra todos, fazer com que seja criado 1 tabuleiro por sala ( fazer tela de inicio para selecionar a sala e depois usar o codigo para cada sala com o path diferente /sala1, /sala2, juntar isso com o rooms do socketio)