import React, {useState} from 'react';
import './App.scss';
import NavBar from "./componets/header";
import Home from './view'
import profile from "./assets/profile.jpg"



function App() {

  const [carrito, setCarrito] = useState(0);

    function addCart(){
        setCarrito(carrito + 1);
        
    }

  return (
    <div className="back">

    <NavBar
      carrito={carrito}
        img={profile}
        />
    <Home
    addCart={addCart}
    />
        </div>
        
  );  
}

export default App;
