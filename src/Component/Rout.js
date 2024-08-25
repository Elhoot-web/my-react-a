import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from  './Home';
import Product from   './product';



const Rout = ({product, setProduct, detail }) => {

    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product  Product={product} setProduct={setProduct} detail={detail} />} />

            
        </Routes>
        </>
    )
}

export default Rout;