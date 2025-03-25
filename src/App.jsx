import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Registeration from "./pages/Registeration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from  "./pages/Products";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import AddtoCart from "./pages/AddtoCart";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/dashboard" element={< Dashboard/>} />
        <Route path="/cart" element={< AddtoCart/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;