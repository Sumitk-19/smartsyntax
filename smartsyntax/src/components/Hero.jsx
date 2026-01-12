import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="text-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold neon-text">
        Smartsyntax
      </h1>
      <p className="mt-4 text-cyan-400 text-lg">
        get ready for future engineering
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a href="#jobs" className="px-6 py-3 bg-cyan-500 text-black rounded-lg shadow-glow">
          Apply for Jobs
        </a>
        <Link
         to="/resources"
        className="px-6 py-3 border border-cyan-400 rounded-lg"
        >
         Free Placement Material
        </Link>

      </div>
    </section>
  );
}
