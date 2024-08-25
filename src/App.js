import React, { createContext, useContext, useState } from "react";
import Nav from "./Component/Nav";
import Rout from "./Component/Rout";
import "./Component/nav.css";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './Component/Footer'
import productDetail from './Component/ProductDetail';

// const appContext = createContext({product: [], setProduct: (search) => {}});


const App = () => {
  
   
  // product Detail
  const [detail, setDetail] = useState([])
  // filter Product
  const [product, setProduct] = useState(productDetail)

  // function filterProduct(search) {
  //   if (search) setProduct(productDetail.filter((product) => product.key.startswith(search)));
  //   else setProduct(productDetail);
  // }
  

  const searchBtn = (product) => 
  {
    const Change = productDetail.filter((x) => 
    {
      return x.Cat === product
    })
    setProduct(Change)
  }
  // product Detail
const view = (product) =>
{
  setDetail([{product}])
}
  return ( 
    <>
   
    <BrowserRouter>
    {/* <appContext.Provider value={{product, setProduct: filterProduct }}> */}
    <Nav searchBtn={searchBtn} />
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} />            
    <Footer />
    {/* </appContext.Provider>; */}
    </BrowserRouter>
   
   
     </>
  );
}

export default App;