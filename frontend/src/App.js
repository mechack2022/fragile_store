import './App.css';
import Navigation from './customer/components/naviagation/Navigation';
import HomePages from './customer/pages/homePages/HomePages';
// import Footer from './customer/components/footer/Footer'

function App() {
  return (
    <div className="">
     <Navigation className="z-100" />
     <div>
     <HomePages/>
     </div>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
