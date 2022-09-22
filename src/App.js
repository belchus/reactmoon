import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import ItemListContainer from './components/itemlistcontainer.js';
import Header from './components/header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <ItemListContainer greeting={"Hola! Somos Moon Accesorios"}/>
    </div>
  );
}

export default App;
