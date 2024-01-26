import ProductItem from "./ProductItem"
import { useContext } from "react";
import {ProductDataContext} from '../data/ProductDataContext'



function Products() {


    const{product}=useContext(ProductDataContext)
  return (
    <div className="grid grid-cols-3 gap-10 mb-8">

     {product.map(prod=><ProductItem key={prod.id} product={prod}/>)}   
    
   
    </div>
  )
}

export default Products