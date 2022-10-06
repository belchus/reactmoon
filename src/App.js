import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar.js';
import Header from './components/header';
import ItemList from './components/ItemListContainers/ItemList';
import Home from './routes/Home';
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Navbar/>
    <Routes>
    <Route path='/Home/' element={<Home/>}/>
      <Route path='/ItemList/' element={<ItemList/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
