import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import avatar from "./data/avatar.jpg";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import ProjectDetail from "./components/projectDetail";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy section active từ URL
  const getActiveSection = () => {
    if (location.pathname === "/") return "about";
    if (location.pathname.startsWith("/portfolio")) return "portfolio";
    if (location.pathname.startsWith("/project")) return "portfolio";
    if (location.pathname.startsWith("/contact")) return "contact";
    if (location.pathname.startsWith("/gallery")) return "gallery";

    return "about";
  };

  const activeSection = getActiveSection();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`);
  };

  const handleBackToPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <div className="bg-[#1A1A1A] min-h-screen">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="bg-[#2A2A2A] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={avatar}
                alt="Tuan Do Ba"
                className="h-12 w-12 object-cover rounded-full"
              />
              <div>
                <h1 className="text-lg font-bold text-white font-courgette">
                  Tuan Do Ba
                </h1>
                <p className="text-xs text-gray-400">Software Developer</p>
              </div>
            </div>
            <button
              className="text-white hover:text-gray-300 transition-colors p-2"
              onClick={toggleMobileMenu}
            >
              <i
                className={`fas ${
                  isMobileMenuOpen ? "fa-times" : "fa-bars"
                } text-xl`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`bg-[#1E1E1E] transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="p-4">
            <div className="flex flex-col gap-2 text-gray-400 font-medium">
              <button
                onClick={() => handleNavClick("/")}
                className={`px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === "about"
                    ? "bg-[#3A3A3A] text-white"
                    : "hover:text-white"
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("/portfolio")}
                className={`px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === "portfolio"
                    ? "bg-[#3A3A3A] text-white"
                    : "hover:text-white"
                }`}
              >
                Portfolio
              </button>
              {/* <button
                onClick={() => handleNavClick("/portfolio")}
                className={`px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === "portfolio"
                    ? "bg-[#3A3A3A] text-white"
                    : "hover:text-white"
                }`}
              >
                Featured
              </button> */}
              <button
                onClick={() => handleNavClick("/contact")}
                className={`px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === "contact"
                    ? "bg-[#3A3A3A] text-white"
                    : "hover:text-white"
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => handleNavClick("/gallery")}
                className={`px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === "gallery"
                    ? "bg-[#3A3A3A] text-white"
                    : "hover:text-white"
                }`}
              >
                Gallery
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Content */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<Hero />} />
            <Route
              path="/portfolio"
              element={<Projects onProjectClick={handleProjectClick} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/project/:id"
              element={<ProjectDetail onBack={handleBackToPortfolio} />}
            />
            {/* Selection mở project.jsx */}
            {/* Teaser Featured Portfolios dưới About, tối giản */}
          </Routes>
          {location.pathname === "/" && (
            <section className="mt-8 mb-4">
              <div
                className="bg-[#242424] hover:bg-[#2b2b2b] transition-colors rounded-xl p-4 cursor-pointer"
                onClick={() => handleNavClick("/portfolio")}
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-folder text-white"></i>
                  <h3 className="text-white font-semibold">
                    Featured Portfolios
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mt-1">Portfolio</p>
                {/* Text Click me to view my featured portfolios */}
                <p className="text-gray-600 text-sm mt-1">
                  Click me to view my featured portfolios
                </p>
              </div>
            </section>
          )}
        </main>
        <footer className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© 2025 TuanHannciD | All Rights Reserved</p>
        </footer>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-6 p-6 mt-10 ml-20">
        <aside className="fade-in  w-64 bg-[#1E1E1E] rounded-2xl p-6 shadow-lg shrink-0 self-start">
          <Sidebar />
        </aside>

        <main className="fade-in flex-1 bg-[#2A2A2A] rounded-2xl shadow-lg overflow-y-auto ml-20 mr-20">
          <section className="p-8">
            <Navbar
              activeSection={activeSection}
              onNavClick={(sec) =>
                handleNavClick(sec === "/" ? "/" : `/${sec}`)
              }
            />

            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<Hero />} />
              <Route
                path="/portfolio"
                element={<Projects onProjectClick={handleProjectClick} />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route
                path="/project/:id"
                element={<ProjectDetail onBack={handleBackToPortfolio} />}
              />
            </Routes>

            <footer className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>© 2025 TuanHannciD | All Rights Reserved</p>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
