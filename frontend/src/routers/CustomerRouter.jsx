import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../customer/components/cart/Cart";
import Footer from "../customer/components/footer/Footer";
import Product from "../customer/components/product/Product";
import ProductDetails from "../customer/components/productDetails/ProductDetails";
import HomePages from "../customer/pages/homePages/HomePages";
import Checkout from "../customer/components/checkout/checkout";
import Order from "../customer/components/order/Order";
import OrderDetails from "../customer/components/order/OrderDetails";
import Navigation from "../customer/components/naviagation/Navigation.jsx";
import PaymentSuccess from "../customer/components/payment/PaymentSuccess";
import { VerifyPayment } from "../customer/components/payment/VerifyPayment";

const CustomerRouter = () => {
  return (
    <div>
      <div className="">
        <Navigation/>
      </div>
      <Routes>

      <Route path="/register" element={<HomePages />} />
      <Route path="/login" element={<HomePages />} />

        <Route path="/" element={<HomePages />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/payment/:orderId" element={<PaymentSuccess />} />
        <Route path="/payment/verifyPayment" element={<VerifyPayment/>} />
      </Routes>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouter;
