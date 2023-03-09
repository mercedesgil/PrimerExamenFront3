import { useState } from 'react'
import './App.css'
import { Form } from './components/Form'


function App() {
  const [info, setInfo] = useState({});
  const [isError, setError] = useState(false);

  const onSubmit = (data) => {
    console.log("data", data)

    if (data.comida.trim()!== "" && data.comida.length > 3 && data.comida.charAt(0) !== " " ) {
      setInfo(data)
  } else {
    setError(true)
  }
  if (data.postre.length > 6) {
    setInfo(data)
} else {
  setError(true)
}
  };
  return (
    <div className="App">
      <h2>Food Form</h2>
      <Form
        onSubmit={onSubmit}
        titulo="Tu menú perfecto"
      />
      {info && !isError &&
        <div>
          {/* esto tiene que estar adentro de una card? */}
          <span>Comida favorita: {info.comida}</span>
          <br />
          <br />
          <span>Postre favorito: {info.postre}</span>
        </div>
      }
      {isError && 
        <span>"Por favor chequea que la información sea correcta"</span>
      }
    </div>
  )
}

export default App
