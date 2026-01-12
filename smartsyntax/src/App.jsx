import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import StickyBar from "./components/StickyBar";

export default function App() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <StickyBar />
    </div>
  );
}
