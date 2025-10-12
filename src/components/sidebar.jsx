import avatar from "../data/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center">
      {/* Profile Picture */}
      <img
        src={avatar}
        alt="Tuan Do Ba"
        className="h-auto w-32 object-cover rounded-[6px] shadow-lg mb-4"
      />

      {/* Name + Title */}
      <h2
        className="text-2xl font-bold font-courgette text-white mb-2"
        style={{ fontFamily: "Courgette, Comic Sans MS, cursive" }}
      >
        Tuan Do Ba
      </h2>
      <div className="bg-[#3A3A3A] text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
        Software Developer
      </div>

      {/* Contact Info */}
      <div className="space-y-3 w-full mb-6">
        <div className="flex items-center gap-3 text-gray-300">
          <i className="fas fa-envelope text-gray-400"></i>
          <span>dobatuan.dev@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <i className="fas fa-map-marker-alt text-gray-400"></i>
          <span>Ha Noi, Viet Nam</span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 text-gray-400">
        <a
          href="https://www.instagram.com/tuan.doba/"
          className="hover:text-white transition-colors"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          href="https://www.facebook.com/dobatuan.2k3/"
          className="hover:text-white transition-colors"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="https://github.com/TuanHannciD/"
          className="hover:text-white transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <i className="fas fa-file-alt text-lg"></i>
        </a>
      </div>
    </div>
  );
}
