import { createContext, useState, useEffect } from "react"
import Products from "./Products";


export const ProductContext = createContext();
function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fethProducts() {
      try{
       const data = await fetch("https://dummyjson.com/products");
       const res = await data.json();
        // console.log(res);
       setProducts(res);
       setLoading(false);
      }
      catch(err) {
       console.log(err)
      }
     }
     fethProducts();
  }, []);
  return (
    <>
      {loading ? <h1>Loading...</h1> : <ProductContext.Provider value={{products}}>
        <Products />
      </ProductContext.Provider>}
    </>
  )
}

export default App
