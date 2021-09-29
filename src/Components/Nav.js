import React from 'react';
import './style.css';

function Nav({ cartCount }) {
  return (
    <div className="navContainer">
      <h2>Shop-O-Shop</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
      </ul>
      <div className="button div">
        <strong>Cart</strong>
        <span className="cartNo">{cartCount}</span>
      </div>
    </div>
  );
}

export default Nav;
