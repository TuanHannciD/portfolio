export default function Navbar({ activeSection, onNavClick }) {
  return (
    <nav className="flex justify-end gap-8 text-gray-400 font-medium mb-8">
      <button
        onClick={() => onNavClick("about")}
        className={`px-4 py-2 rounded-lg transition-colors ${
          activeSection === "about"
            ? "bg-[#3A3A3A] text-white"
            : "hover:text-white"
        }`}
      >
        About
      </button>
      <button
        onClick={() => onNavClick("portfolio")}
        className={`px-4 py-2 rounded-lg transition-colors ${
          activeSection === "portfolio"
            ? "bg-[#3A3A3A] text-white"
            : "hover:text-white"
        }`}
      >
        Portfolio
      </button>
      <button
        onClick={() => onNavClick("contact")}
        className={`px-4 py-2 rounded-lg transition-colors ${
          activeSection === "contact"
            ? "bg-[#3A3A3A] text-white"
            : "hover:text-white"
        }`}
      >
        Contact
      </button>
      {/* <button
        onClick={() => onNavClick("gallery")}
        className={`px-4 py-2 rounded-lg transition-colors ${
          activeSection === "gallery"
            ? "bg-[#3A3A3A] text-white"
            : "hover:text-white"
        }`}
      >
        Gallery
      </button> */}
    </nav>
  );
}
