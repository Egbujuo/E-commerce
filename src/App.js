import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

function App() {
  const [data, setData] = useState({ products: [], cart: [], totalPrice: 0 });
  useEffect(() => {
    let fetchData = async (url) => {
      let response = await fetch(url);
      let dataGotten = await response.json();
      console.log(dataGotten);
      setData({ ...data, products: dataGotten });
    };
    fetchData("https://fakestoreapi.com/products");
  }, []);
  
  let totalAmount = () => {
    if (data.cart.length > 0) {
      let amount = data.cart.reduce((sum, product) => {
        return sum + product.price;
      });
      setData({ ...data, totalPrice: amount });
    }
  };
  let addToCart = (product) => {
    let existingItem = data.cart.find((item) => item.id == product.id);
    console.log(existingItem);
    if (existingItem) {
      let tempProduct = { ...product, quantity: existingItem.quantity + 1 };
      let fit = data.cart.filter((each) => tempProduct.id !== each.id);
      let tempCart = [...fit, tempProduct];
      setData({ ...data, cart: tempCart });
    } else {
      let tempProduct = { ...product, quantity: 1 };
      setData({ ...data, cart: [...data.cart, tempProduct] });
      console.log("this runs first");
    }
  };
  let increaseCount = (current) => {
    let tempCart = data.cart.map((hh) => {
      if (hh.id == current.id) {
        return { ...hh, quantity: hh.quantity + 1 };
      } else {
        return hh;
      }
    });
    setData({ ...data, cart: tempCart }); 
    console.log(tempCart);
  };
  let decreaseCount = (current) => {
    let tempCart = data.cart.map((hh) => {
      if (hh.id == current.id) {
        return { ...hh, quantity: hh.quantity - 1 };
      } else {
        return hh;
      }
    });
    setData({ ...data, cart: tempCart });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={data.cart} />
        <Routes>
          <Route
            path="/"
            element={<Home products={data.products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={data.cart}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                totalAmount={totalAmount}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
