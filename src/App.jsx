import HomePage from "./pages/HomePage";
import SkillPage from "./pages/SkillPage";
import DetailPorto from "./pages/DetailPorto";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/detail/:id" element={<DetailPorto />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
