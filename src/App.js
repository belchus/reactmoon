import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/header';
import Cart from './components/Cart/Cart.js';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <CartProvider>
      <Navbar/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/ItemListContainer/' element={<ItemListContainer/>}/>
      <Route path="/ItemListContainer/:DetalleId" element={<ItemListContainer />} />
      <Route path='/Item/:Id' element={<ItemDetailContainer/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
     
    </Routes>
    </CartProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;
