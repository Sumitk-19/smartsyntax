import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-center py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Smartsyntax
      </h1>

      <p className="text-cyan-400 text-sm sm:text-base md:text-lg mt-2">
        get ready for future engineering
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <a
          href="#jobs"
          className="w-full sm:w-auto px-6 py-3 bg-cyan-500 text-black rounded-lg font-medium"
        >
          Apply for Jobs
        </a>

        <Link
          to="/resources"
          className="w-full sm:w-auto px-6 py-3 border border-cyan-400 rounded-lg"
        >
          Free Placement Material
        </Link>
      </div>
    </section>
  );
}
