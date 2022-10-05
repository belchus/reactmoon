import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar.js';
import Header from './components/header';
import Productos from './components/ItemListContainers/Productos';
import Home from './routes/Detail';
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Navbar/>
    <Routes>
    <Route path='/Home/' element={<Home/>}/>
      <Route path='/Productos/' element={<Productos/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
