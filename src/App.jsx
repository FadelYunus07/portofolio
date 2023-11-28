import { useState } from "react";
import HomePage from "./pages/HomePage";
import Skill from "./pages/Skill";
import DetailPorto from "./pages/DetailPorto";
import PortfolioPage from "./pages/PortfolioPage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import { Routes, Route } from "react-router-dom";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/detail/:id" element={<DetailPorto />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
