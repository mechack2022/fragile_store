import "./App.css";
import Navigation from "./customer/components/naviagation/Navigation";
import Product from "./customer/components/product/Product";
import HomePages from "./customer/pages/homePages/HomePages";
import Footer from "./customer/components/footer/Footer";
import ProductDetails from "./customer/components/productDetails/ProductDetails";
import Cart from "./customer/components/cart/Cart";
import Checkout from "./customer/components/checkout/checkout";
import Order from "./customer/components/order/Order";
import OrderDetails from "./customer/components/order/OrderDetails";
import { Routes, Route } from "react-router-dom";
import CustomerRouter from "./routers/CustomerRouter";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouter />} />
      </Routes>
      <div>
       
      </div>
    </div>
  );
}

export default App;
