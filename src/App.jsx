import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
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
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 1024;
  });
  const navigate = useNavigate();
  const location = useLocation();

  const desktopProjectId = useMemo(() => {
    const match = location.pathname.match(/^\/project\/(\d+)$/);
    return match ? Number(match[1]) : null;
  }, [location.pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (event) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

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
      {!isDesktop ? (
        <>
          <div className="bg-[#2A2A2A] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt="Tuan Do Ba"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h1 className="font-courgette text-lg font-bold text-white">
                    Tuan Do Ba
                  </h1>
                  <p className="text-xs text-gray-400">Software Developer</p>
                </div>
              </div>
              <button
                className="p-2 text-white transition-colors hover:text-gray-300"
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
                : "max-h-0 overflow-hidden opacity-0"
            }`}
          >
            <div className="p-4">
              <div className="flex flex-col gap-2 font-medium text-gray-400">
                <button
                  onClick={() => handleNavClick("/")}
                  className={`rounded-lg px-3 py-2 text-left transition-colors ${
                    activeSection === "about"
                      ? "bg-[#3A3A3A] text-white"
                      : "hover:text-white"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => handleNavClick("/experience")}
                  className={`rounded-lg px-3 py-2 text-left transition-colors ${
                    activeSection === "experience"
                      ? "bg-[#3A3A3A] text-white"
                      : "hover:text-white"
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => handleNavClick("/portfolio")}
                  className={`rounded-lg px-3 py-2 text-left transition-colors ${
                    activeSection === "portfolio"
                      ? "bg-[#3A3A3A] text-white"
                      : "hover:text-white"
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => handleNavClick("/contact")}
                  className={`rounded-lg px-3 py-2 text-left transition-colors ${
                    activeSection === "contact"
                      ? "bg-[#3A3A3A] text-white"
                      : "hover:text-white"
                  }`}
                >
                  Contact
                </button>
                <button
                  onClick={() => handleNavClick("/gallery")}
                  className={`rounded-lg px-3 py-2 text-left transition-colors ${
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
              <section className="mb-4 mt-8">
                <div
                  className="cursor-pointer rounded-xl bg-[#242424] p-4 transition-colors hover:bg-[#2b2b2b]"
                  onClick={() => handleNavClick("/portfolio")}
                >
                  <div className="flex items-center gap-3">
                    <i className="fas fa-folder text-white"></i>
                    <h3 className="font-semibold text-white">
                      Featured Portfolios
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">Portfolio</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Click me to view my featured portfolios
                  </p>
                </div>
              </section>
            )}
          </main>

          <footer className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
            <p>� 2025 TuanHannciD | All Rights Reserved</p>
          </footer>
        </>
      ) : (
        <DesktopLanding
          pathname={location.pathname}
          projectIdFromRoute={desktopProjectId}
        />
      )}
    </div>
  );
}
