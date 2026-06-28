import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Footer from "./component/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
        <BrowserRouter>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/education" element={<Education />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}
