import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";


function App() {

  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  const [filteredProducts, setFilteredProducts] = useState(undefined)
  
  const [search, setSearch] = useState('')

  useEffect(() => {
    
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((res) => res.json())
    .then((res) => setProducts(res))
    .catch((error) => console.log(error))
    
  }, [])

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} products={products}  setFilteredProducts={setFilteredProducts}/>
      <main>
        <ProductList search={search} filteredProducts={filteredProducts} products={products} cartProducts={cartProducts} setCartProducts={setCartProducts}/>
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </main>
    </div>
  );
}

export default App;
