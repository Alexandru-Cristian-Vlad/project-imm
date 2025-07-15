import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar"
import { ProductsList } from "./components/Products";
import { Home } from "./components/home";
import { Manufacturing } from "./components/Manufacturing";
import { Stats } from "./components/Stats";

export function App () {

  return (

    
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/products" element={<ProductsList />}></Route>
        <Route path="/manufacturing" element={<Manufacturing />}></Route>
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>

    </Router>

  )
}