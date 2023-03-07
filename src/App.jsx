import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CC0 from "./pages/CC0";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar className="Navbar" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cc0" element={<CC0 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
