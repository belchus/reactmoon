import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import ItemListContainer from './components/itemlistcontainer.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Hola! Somos Moon Accesorios"}/>
    </div>
  );
}

export default App;
