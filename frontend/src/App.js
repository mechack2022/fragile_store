import './App.css';
import Navigation from './customer/components/naviagation/Navigation';
import Product from './customer/components/product/Product';
import HomePages from './customer/pages/homePages/HomePages';
import Footer from './customer/components/footer/Footer'
import ProductDetails from './customer/components/productDetails/ProductDetails';

function App() {
  return (
    <div className="">
     <Navigation className="z-100" />
     <div>
     {/* <HomePages/> */}
     {/* <Product/> */}
     <ProductDetails/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
