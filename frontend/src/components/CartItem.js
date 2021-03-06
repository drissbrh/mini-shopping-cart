import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = (props) => {
  const { product, name, image, price, removeHandler, quantityHandler, qty } =
    props;

  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={image} alt={name} />
      </div>
      <Link to={`/product/${product}`} className="cartitem__name">
        <p>{name}</p>
      </Link>

      <p className="cartitem__price">${price}</p>
      <select
        value={qty}
        className="cartitem__select"
        onChange={(e) => quantityHandler(product, e.target.value)}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </select>
      <button className="cartitem__deleteBtn" onClick={removeHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
