/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import Products from './Components/Products';
import Product from './Components/Product';
import Login from './Components/Login';
import Register from './Components/Register';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route  path='/products' element={<Products/>}></Route>
        <Route  path='/products/:id' element={<Product/>}></Route>
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/Register' element={<Register/>}></Route>
        <Route  path='/contact' element={<Contact/>}></Route>
        <Route  path='/About' element={<About/>}></Route>


      </Routes>
      </BrowserRouter>
      
        </>
  );
}

export default App;
