import './App.css'
import Boton from './components/Boton'
import Contador from './components/Contador'
import Boton2 from './components/Boton2'
import { useState } from 'react'


function App() {

  const [numClics, setNumClics] = useState(0)
  const [count, setCount] = useState(null)

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  const contadorAutomatico = () => {
    setNumClics((time) => time + 1)

    setCount(setInterval(() => {
      setNumClics((time) => time + 1)
    }, 1000))
  };

  const stop = () => {
    setNumClics(0)
    clearInterval(count)
  }

  const ContadorAtras = () => {
    setNumClics(numClics - 1);
  };
  return (
    <div className='App'>
      <div className='contenedor-principal'>

        <Boton2
          texto='Automatico'
          esBotonDeClic={true}
          manejarClic={contadorAutomatico}
        />

        <Boton2
          texto='Restar'
          esBotonDeClic={false}
          manejarClic={ContadorAtras}
        />


        <Contador numClics={numClics} />

        <Boton
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />

        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={stop}
        />
      </div>
    </div>
  )
}

export default App
