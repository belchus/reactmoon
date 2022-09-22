import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import Header from './components/header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <ItemListContainer greeting={"Hola! Somos Moon Accesorios"}/>
      <ItemListContainer greeting={"Ingresa a nuestra tienda"}/>
    </div>
  );
}

export default App;
