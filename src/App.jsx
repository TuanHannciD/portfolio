import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import avatar from "./data/avatar.jpg";

import Hero from "./components/hero";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import ProjectDetail from "./components/projectDetail";
import DesktopLanding from "./components/desktopLanding";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const desktopProjectId = useMemo(() => {
    const match = location.pathname.match(/^\/project\/(\d+)$/);
    return match ? Number(match[1]) : null;
  }, [location.pathname]);

  const getActiveSection = () => {
    if (location.pathname === "/" || location.pathname === "/about") {
      return "about";
    }
    if (location.pathname.startsWith("/experience")) return "experience";
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
      <div className="lg:hidden">
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
                onClick={() => handleNavClick("/experience")}
                className={`px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === "experience"
                    ? "bg-[#3A3A3A] text-white"
                    : "hover:text-white"
                }`}
              >
                Experience
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

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<Hero />} />
            <Route path="/experience" element={<Experience />} />
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

      <div className="hidden lg:block">
        <DesktopLanding
          pathname={location.pathname}
          projectIdFromRoute={desktopProjectId}
        />
      </div>
    </div>
  );
}
