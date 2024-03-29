/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ProductDataContext } from '../data/ProductDataContext';

function ProductItem({product}) {
 
  const { hadleSelecetedProduct} = useContext(ProductDataContext);




  const handleProductSelection = () => {
    hadleSelecetedProduct(product);

  
   
  };


  return (
   
      <div className="border p-4 m-2 rounded-lg shadow-lg">
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={product.image}
          alt=""
        />
        <div className="p-4">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            
        <p className="text-gray-500 my-2">{product.price}TL</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"onClick={handleProductSelection}>Sepete Ekle</button>
      </div>
      </div>

      
  
  );
}

export default ProductItem;
