import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomePage from "./pages/HomePage";
import SkillPage from "./pages/SkillPage";
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
        <Route path="/" Component={HomePage} />
        <Route path="/skill" Component={SkillPage} />
        <Route path="/project" Component={PortfolioPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
