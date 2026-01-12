import { Link, useLocation } from "react-router-dom";
import { FaHome, FaWhatsapp, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function StickyBar() {
  const location = useLocation();

  const iconClass = (path) =>
    `text-2xl ${location.pathname === path ? "text-cyan-400" : "text-gray-400"}`;

  return (
    <div className="fixed bottom-0 w-full bg-black/95 border-t border-cyan-400 z-50">
      <div className="max-w-md mx-auto flex justify-around py-3">
        <Link to="/" className={iconClass("/")}>
          <FaHome />
        </Link>

        <a href="https://whatsapp.com/channel/0029Vb7hulXLtOjBFoumO02Q" target="_blank" className="text-gray-400 text-2xl">
          <FaWhatsapp />
        </a>

        <a href="https://instagram.com/smartsyntax.ig" target="_blank" className="text-gray-400 text-2xl">
          <FaInstagram />
        </a>

        <a href="https://t.me/smartsyntaxtg" target="_blank" className="text-gray-400 text-2xl">
          <FaTelegramPlane />
        </a>

        <a href="https://x.com/sumitk_19" target="_blank" className="text-gray-400 text-2xl">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}
