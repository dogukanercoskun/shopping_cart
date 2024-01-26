/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { ProductDataContext } from "../data/ProductDataContext";

function Box() {
  const { selectedProduct, hadleRemoveSelecetedProduct } =
    useContext(ProductDataContext);

  const [data, setData] = useState([]);

  const [productSumPirce, setProductSumPrice] = useState(0);

  useEffect(() => {
    if (selectedProduct.length > 0) {
      let sum = 0;
      selectedProduct.map((item) => {
        sum = sum + item.price;
        return sum;
      });

      setData(selectedProduct);
      setProductSumPrice(sum);
    } else {
      setData([]);
    }
  }, [selectedProduct]);

  function handleRemoveData() {
    if (data.length > 0) {
      setData(() => {
        const emptyProd = selectedProduct.splice();

        return emptyProd;
      });
      setProductSumPrice(() => {
        const productSum = 0;

        return productSum;
      });
    }

    hadleRemoveSelecetedProduct();
  }

  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 justify-center">Sepet</h2>
      {data.length > 0 ? (
        <ul>
          {data.map((data, index)=> (
          <li key={index} className="mt-4  justify-between">
              <span className="item-center text-xl mt-2 rounded-m shadow-m " >{data.title}</span>
              <hr className="my-4" />
          </li>
          ))}
      </ul> ):<ul> <li className="mt-2">Sepetiniz boş.</li></ul>}
      
      <p className="font-semibold text-xl">Toplam: {productSumPirce}</p>

      <button
        className="bg-red-700 text-white px-4 py-2 rounded w-full hover:bg-red-400 transition-all mt-4"
        onClick={handleRemoveData}
      >
        Sepetten Çıkar
      </button>
    </div>
  );
}

export default Box;
