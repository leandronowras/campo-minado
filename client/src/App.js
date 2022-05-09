import './App.css';
import io from 'socket.io-client'
import { useRef } from 'react'

const socket = io.connect('http://localhost:4000')

function App() {
  const linhaInputRef = useRef()
  const colunaInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const linha = linhaInputRef.current.value
    const coluna = colunaInputRef.current.value
    
    socket.emit("jogada", {
      message: [linha, coluna]
    })   
  }

  const getTabuleiro = () => {
    socket.emit('messageFromServer','','', (response) => {
      console.table(response.data)
    })
  }

  return (
    <div className="App" >
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor='linha'>linha</label>
            <input type="text" placeholder='8' required id='linha' ref={linhaInputRef} />
          </div>
          <div>
            <label htmlFor='coluna'>coluna</label>
            <input type="text" placeholder='A' required id='coluna' ref={colunaInputRef} />
          </div>
          <div>
            <button>Enviar Jogada</button>
          </div>
        </div>
      </form>

      <div>
        <button onClick={getTabuleiro}>Update no tabuleiro</button>
      </div>
    </div>
  );
}

export default App;
