import Box from "./components/Box"
import Header from "./components/Header"
import Products from "./components/Products"
import {ProductDataContextProvider} from'./data/ProductDataContext.jsx'





function App() {


  return (
    <ProductDataContextProvider>
 
   
 <div className="container mx-auto p-4">

   <Header/> 
   
   <Products/>
   <Box/>   
      
 </div>
 

      

    </ProductDataContextProvider> 
  )
}

export default App
