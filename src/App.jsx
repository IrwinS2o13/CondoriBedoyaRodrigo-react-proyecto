import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
//import ItemDetailContainer from './components/ItemDetailContainer.jsx'


import './components/NavBar.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount.js';
import Cart from './components/Cart.jsx';
import { useEffect, lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartContextProvider from './context/CartContext.jsx';

const ItemDetailContainer = lazy(()=>import('./components/ItemDetailContainer.jsx'))

function App() {
  return (
      <BrowserRouter>
        <CartContextProvider>
            <div>
              <NavBar />
              <Routes>
                <Route path='/count' element={<ItemCount stock="10"/>}/>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
                <Route path='/item/:itemid' element={
                  <Suspense fallback={<div>Cargando...</div>}>
                    <ItemDetailContainer />
                  </Suspense>
                }/>
              </Routes>   
            </div>
        </CartContextProvider>            
      </BrowserRouter>
  );
}

export default App;
