import logo from './logo.svg';
import './App.css';
import CartItem from './components/CartItem';


function App() {
  const cartItemData = {
    image: "https://i.dummyjson.com/data/products/1/1.jpg",
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    shippingCost: 5.99,
  };

  return (
    <div className="App">
      <h1>My Cart</h1>
      <CartItem item={cartItemData} />
    </div>
  );
}

export default App;
