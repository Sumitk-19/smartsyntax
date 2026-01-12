import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Resources from "./components/Resources";
import StickyBar from "./components/StickyBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Hero />
      <Jobs />
      <Resources />
      <Footer />
      <StickyBar />
    </div>
  );
}
