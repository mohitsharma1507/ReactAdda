import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1999,
    image: "https://via.placeholder.com/150",
  },
];

const ProductCard = ({ product, onAddtoCard }) => {
  return (
    <div>
      <img src={product.image} alt="photo" />
      <h1>{product.name}</h1>
      <h2>₹{product.price}</h2>
      <button onClick={() => onAddtoCard(product)}>Add to Cart</button>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddCard = (product) => {
    setCart([...cart, product]);
  };
  const handleRemove = (indexToRemove) => {
    const newCart = cart.filter((_, id) => id !== indexToRemove);
    setCart(newCart);
  };
  return (
    <div>
      <h2>Product List</h2>
      <div>
        {products.map((items) => {
          <ProductCard
            key={items.id}
            product={items}
            onAddtoCard={handleAddCard}
          />;
        })}
      </div>

      <h2>Cart ({cart.length}items)</h2>

      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>
            {item.name} - ₹{item.price}
            <button onClick={() => handleRemove(idx)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
