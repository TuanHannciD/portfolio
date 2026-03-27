export default function Navbar({ activeSection, onNavClick }) {
  return (
    <nav className="flex flex-wrap justify-end gap-3 text-sm font-medium text-gray-400 lg:gap-4 lg:text-base">
      <button
        onClick={() => onNavClick("about")}
        className={`rounded-full px-4 py-2 transition-colors ${
          activeSection === "about"
            ? "bg-[#3A3A3A] text-white"
            : "hover:text-white"
        }`}
      >
        About
      </button>
      <button
        onClick={() => onNavClick("experience")}
        className={`rounded-full px-4 py-2 transition-colors ${
          activeSection === "experience"
            ? "bg-[#3A3A3A] text-white"
            : "hover:text-white"
        }`}
      >
        Experience
      </button>
      <button
        onClick={() => onNavClick("portfolio")}
        className={`rounded-full px-4 py-2 transition-colors ${
          activeSection === "portfolio"
            ? "bg-[#3A3A3A] text-white"
            : "hover:text-white"
        }`}
      >
        Portfolio
      </button>
      <button
        onClick={() => onNavClick("contact")}
        className={`rounded-full px-4 py-2 transition-colors ${
          activeSection === "contact"
            ? "bg-[#3A3A3A] text-white"
            : "hover:text-white"
        }`}
      >
        Contact
      </button>
      <button
        onClick={() => onNavClick("gallery")}
        className={`rounded-full px-4 py-2 transition-colors ${
          activeSection === "gallery"
            ? "bg-[#3A3A3A] text-white"
            : "hover:text-white"
        }`}
      >
        Gallery
      </button>
    </nav>
  );
}
