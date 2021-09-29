import './App.css';
import { useState } from 'react';
import Nav from './Components/Nav';
import Product from './Components/product';

function App() {
  //
  const [items] = useState([
    { name: 'Fancy Pro', price: '$10', addedToCart: false },
    { name: 'Special Item', price: '$50', addedToCart: false },
    { name: 'Sale Item', price: '$75', addedToCart: false },
    { name: 'Popular Product', price: '$100', addedToCart: false },
  ]);

  const [cartNo, setCartNo] = useState(0);

  const callBackChild = (data, name) => {
    setCartNo(cartNo + data);
    console.log(name);
    items.map((item) => {
      if (name === item.name) {
        item.addedToCart = !item.addedToCart;
      }
      return item;
    });
    console.log(items);
  };

  return (
    <>
      <div className="App">
        <Nav cartCount={cartNo} />
        <div className="cardContainer">
          {items.map((item, index) => {
            return (
              <Product
                value={item}
                key={index}
                parentCallBack={callBackChild}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
