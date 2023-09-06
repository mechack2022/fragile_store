import './App.css';
import Navigation from './customer/components/naviagation/Navigation';
import Product from './customer/components/product/Product';
import HomePages from './customer/pages/homePages/HomePages';
import Footer from './customer/components/footer/Footer'
import ProductDetails from './customer/components/productDetails/ProductDetails';
import Cart from './customer/components/cart/Cart';
import Checkout from './customer/components/checkout/checkout';
import Order from './customer/components/order/Order';
import OrderDetails from './customer/components/order/OrderDetails';

function App() {
  return (
    <div className="">
     <Navigation className="z-100" />
     <div>
     {/* <HomePages/> */}
     {/* <Product/> */}
     {/* <ProductDetails/> */}
     {/* <Cart/> */}
     {/* <Checkout/> */}
     {/* <Order/> */}
     <OrderDetails/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
