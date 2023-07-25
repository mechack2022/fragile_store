import './App.css';
import Navigation from './customer/components/naviagation/Navigation';
import Product from './customer/components/product/Product';
import HomePages from './customer/pages/homePages/HomePages';
import Footer from './customer/components/footer/Footer'

function App() {
  return (
    <div className="">
     <Navigation className="z-100" />
     <div>
     {/* <HomePages/> */}
     <Product/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
