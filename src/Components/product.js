import React from 'react';
import './style.css';

function Product(props) {
  const imgsrc = 'https://via.placeholder.com/300x300';
  const name = props.value.name;
  const price = props.value.price;
  let cartName = !props.value.addedToCart ? 'Add to Cart' : 'Remove';

  const handleCart = () => {
    console.log(cartName);

    if (cartName === 'Add to Cart') props.parentCallBack(1, name);
    else props.parentCallBack(-1, name);
  };

  return (
    <div className="container">
      <div className="card">
        <img src={imgsrc} alt="" />
        <h2>{name}</h2>
        <p>
          <b>{price}</b>
        </p>
        <button onClick={handleCart}>{cartName}</button>
      </div>
    </div>
  );
}

export default Product;
