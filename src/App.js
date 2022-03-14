import logo from './logo.svg';
import './App.scss';
import NavBar from "./componets/header";
import Home from './view'
import profile from "./assets/profile.jpg"


function App() {
  return (
    <div className="back">

    <NavBar
        img={profile}
        />
    <Home/>
        </div>
        
  );  
}

export default App;
