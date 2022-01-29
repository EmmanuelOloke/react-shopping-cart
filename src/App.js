import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';
import { useState } from 'react';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((item) => item.id === product.id ? {...exist, qty: exist.qty + 1} : item));
    }
    else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(cartItems.map((item) => item.id === product.id ? {...exist, qty: exist.qty - 1} : item));
    }
  }
    return ( 
      <div className = "App" >
        <Header countCartItems={cartItems.length}/>
        <div className="row">
          <Main onAdd={onAdd} products={products}></Main>
          <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
        </div>
        
      </div>
    );
}

export default App;