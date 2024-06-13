import React from 'react';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import MenuBar from './components/menubar/MenuBar';
import LandingPage from './components/HomePage/LandingPage';
import ProductSpecification from './components/ProdcutsInfo/ProductDetails';
import Cart from './components/ProdcutsInfo/Cart';
import AllProducts from './components/product/AllProducts';
import SingleProduct from './components/product/SingleProduct';

function App() {
  return (
    <>
      <MenuBar></MenuBar>
      <Routes>
        <Route path='/' element={
            <div className='ecommerce container' style={{paddingTop:"100px"}}>
                <LandingPage></LandingPage>
            </div>
          }>
        </Route>
        <Route path='products' element={<AllProducts></AllProducts>}>
        </Route>
        <Route path='AllProdcuts/:singleProd' element={<SingleProduct></SingleProduct>}></Route>

        <Route path='selectedProdcuts/:productName' element={<ProductSpecification></ProductSpecification>}></Route>
        <Route path='cart' element={<Cart></Cart>}></Route>
      </Routes>
    </>
  );
}

export default App;
