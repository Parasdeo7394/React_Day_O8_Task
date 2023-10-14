import React, { useState } from 'react';

const CartItem = ({ item }) => {
  const { image, title, description, price, shippingCost } = item;
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalCost = (price + shippingCost) * quantity;

  return (
    <div className="cart-item">
      <img src={image} alt={title} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-title">{title}</h2>
        <p className="cart-item-description">{description}</p>
        <p className="cart-item-price">Price: ${price.toFixed(2)}</p>
        <p className="cart-item-shipping-cost">Shipping Cost: ${shippingCost.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p className="cart-item-total-cost">Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;