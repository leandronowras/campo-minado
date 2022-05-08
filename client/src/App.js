import './App.css';
import io from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

function App() {
  // const sendMessage = () => {
  //   socket.emit("send_message", {
  //     message: 'oi sou do react'
  //   })    
  // }

  const getTabulerio = () => {
    socket.emit('messageFromServer','','', (response) => {
      console.table(response.data)
    })
  }

  return (
    <div className="App" >
      <input placeholder="Message"/>
      {/* <buton onClick={sendMessage}>Send message</buton> */}
      <buton onClick={getTabulerio}>Tabuleiro</buton>
    </div>
  );
}

export default App;
