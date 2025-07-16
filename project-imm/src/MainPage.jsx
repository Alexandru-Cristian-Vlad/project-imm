import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Inventory } from "./dashboard/inventory/Inventory";
import { Home } from "./dashboard/home/Home";
import { Manufacturing } from "./dashboard/manufacturing/Manufacturing";
import { Reports } from "./dashboard/reports/Reports";

export function MainPage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />}></Route>
        <Route path="reports" element={<Reports />}></Route>
        <Route path="inventory" element={<Inventory />}></Route>
        <Route path="manufacturing" element={<Manufacturing />}></Route>
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}
