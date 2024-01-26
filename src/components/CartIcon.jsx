import { LuShoppingCart } from "react-icons/lu";
import { useContext } from "react";
import { ProductDataContext } from '../data/ProductDataContext';


function CartIcon() {

  const { selectedProduct} = useContext(ProductDataContext);
  return (
    <div className="relative">
      <LuShoppingCart className="text-2xl" />


      {selectedProduct.length > 0 ? (

      <span className="bg-red-500 text-white w-5 h-5 flex justify-center item-center rounded-full absolute -top-2 -right-4 text-">{selectedProduct.length}</span>

         
        ) : (
          <span className="bg-red-500 text-white w-5 h-5 flex justify-center item-center rounded-full absolute -top-2 -right-4 text-">0</span>
        )}
      
      </div>
  )
}

export default CartIcon