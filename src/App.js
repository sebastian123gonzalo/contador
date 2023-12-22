import './App.css'; 
import Boton from './componentes/button'
import Contador from './componentes/counter'
import logo from './img/logo.png';
import { useState } from 'react'; //HOOKS, por ejemplo, useState 

function App() {

  const [numClics, setNumClics] = useState(0); //Se inicializa con 0 clics

  const manejarClic = () => {
    console.log("Clic");
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    console.log("Reiniciar");
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='logoContenedor'>
        <img 
          className='logo'
          src={logo}
          alt='Logo semarfe'
        />
      </div>
      <div className='principalContenedor'>
        <Contador 
          numClics={numClics}/>
        <Boton 
          texto='Clic'
          esBotonClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador}/>

      </div>
    </div>
  );
}

export default App;
