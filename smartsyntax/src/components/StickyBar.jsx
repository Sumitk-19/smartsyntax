import { Link, useLocation } from "react-router-dom";
import { FaHome, FaWhatsapp, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function StickyBar() {
  const location = useLocation();

  const iconClass = (path) =>
    `text-2xl ${location.pathname === path ? "text-cyan-400" : "text-gray-400"}`;

  return (
    <div className="fixed bottom-0 w-full bg-black/95 border-t border-cyan-400 flex justify-around py-3 z-50">
      
      {/* Home */}
      <Link to="/" className={iconClass("/")}>
        <FaHome />
      </Link>

      {/* WhatsApp Channel */}
      <a
        href="https://whatsapp.com/channel/0029Vb7hulXLtOjBFoumO02Q"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 text-2xl hover:text-cyan-400"
      >
        <FaWhatsapp />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/smartsyntax.ig"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 text-2xl hover:text-cyan-400"
      >
        <FaInstagram />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/smartsyntaxtg"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 text-2xl hover:text-cyan-400"
      >
        <FaTelegramPlane />
      </a>

      {/* Twitter / X */}
      <a
        href="https://x.com/sumitk_19"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 text-2xl hover:text-cyan-400"
      >
        <FaTwitter />
      </a>
    </div>
  );
}
