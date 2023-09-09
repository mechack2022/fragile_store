import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomerRouter from "./routers/CustomerRouter";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouter />} />
      </Routes>
    </div>
  );
}

export default App;
