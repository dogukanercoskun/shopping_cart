import { createContext, useEffect, useState } from "react";

const ProductDataContext = createContext();

// eslint-disable-next-line react/prop-types
function ProductDataContextProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState([]);

  function hadleSelecetedProduct(props) {
    setSelectedProduct((prev) => {
      const slctprd = prev == [] ? prev.push(props) : [...prev, props];

      return slctprd;
    });
  }

  function hadleRemoveSelecetedProduct() {
    setSelectedProduct((prev) => {
      const slctprd = !prev.length == 0 ? prev.splice() : [...prev];

      return slctprd;
    });
  }

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((responese) => setProductData(responese));
  }, []);
  const product = productData;

  return (
    <ProductDataContext.Provider
      value={{
        product,
        selectedProduct,
        hadleSelecetedProduct,
        hadleRemoveSelecetedProduct,
      }}
    >
      {children}
    </ProductDataContext.Provider>
  );
}

export { ProductDataContextProvider, ProductDataContext };
