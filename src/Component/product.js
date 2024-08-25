import React, { useContext, appContext, setProduct, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import ProductDetail from './ProductDetail';
import './Product.css';



const Product = () => {
// const {Product} = useContext(appContext);

  
  const [product, setProduct] = useState(ProductDetail)
  const filtterproduct = (product) =>
  {
    const update =ProductDetail.filter((x) =>
    {
       return x.Cat === product;
    })
    setProduct(update);

  }
  const AllProducts = () =>
  {
    setProduct(ProductDetail)
  }
  return(
    <>

    {/* \\\\\\ */}
    {/* {Product.map((product) => (
      <p key={product.id}>{product.Title}</p>
    ))}
       */}
      <div className='products'>
      <h2> # products Elhoot$</h2>
      <p>Elhoot & Products</p>
        <div className='container'>
          <div className="filter">
            <din className='categories'>
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts ()}>All Products</li>
                <li onClick={() => filtterproduct ("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduct ("Smart Watch")}>Smart Watch</li>
                <li onClick={() => filtterproduct ("Headphone")}>Headphone</li>
                <li onClick={() => filtterproduct ("Camera")}>Camera</li>
                <li onClick={() => filtterproduct ("Gaming")}>Gaming</li>
              </ul>
            </din>
          </div>
          <div className="productBox">
              <div className="contant">
                {
                  product.map((curElm) =>
                  {

                    return(
                      
                      <>
                <div className='box' key={curElm.id}>
               <div className="img_box">
               <img src={curElm.Img} alt={curElm.Title}></img>
                <div className='icon'>
               <li><AiOutlineShoppingCart /></li>
               <li><BsEye /></li>
               <li><AiOutlineHeart /></li>
            </div> 
            </div> 
           <div className="detail">
            <p>{curElm.Cat}</p>
            <h3>{curElm.Title}</h3>
            <h4>{curElm.Price}</h4>
            </div> 
            </div> 
                      </>
                    )

                  })
                }
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default  Product;