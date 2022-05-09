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