import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar.js';
import Header from './components/header';
import Home from './routes/Home';
import ItemDetailContainer from './components/ItemListContainers/ItemDetailContainer';
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainers/ItemListContainer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Navbar/>
    <Routes>
    <Route path='/Home/' element={<Home/>}/>
      <Route path='/ItemListContainer/' element={<ItemListContainer/>}/>
      <Route path='/Detail/:id' element={<ItemDetailContainer/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
