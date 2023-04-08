import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BottomNavbar from './components/BottomNavbar';
import Slider from './components/Slider';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Products from './components/Products';
import Signup from './components/Signup';
import Login from './components/Login';
import ProductState from './context/products/ProductState';

function App() {
  return (
    <>
    <ProductState>
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login/>}></Route>
     <Route exact path="/signup" element={<Signup/>}></Route>
      <Route exact path="/" element={ <Header/>}></Route>
      <Route exact path="/" element ={<Slider/>}></Route>
      <Route exact path="/" element={<BottomNavbar/>}></Route>
      <Route exact path="/Products" element ={<Products/>}></Route>
    </Routes>
    </BrowserRouter>
    </ProductState>
    </>
  );
}

export default App;
