import { useEffect, useState } from "react";

const PAGE_SIZE = 8;

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzYqs7JSVscXyP8jQ6HfB5YYtgQyw6u7NkRTW7uZPbDF5ciW-AF3x2dLv7Tji-3KLtj/exec")
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Job fetch error:", err));
  }, []);

  const filteredJobs = jobs.filter(job =>
    (job.Company || "").toLowerCase().includes(query.toLowerCase()) ||
    (job.Role || "").toLowerCase().includes(query.toLowerCase())
  );

  const visibleJobs = filteredJobs.slice(0, visibleCount);

  return (
    <section id="jobs" className="py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
        Latest Opportunities
      </h2>

      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setVisibleCount(PAGE_SIZE);
        }}
        placeholder="Search by company or role..."
        className="w-full max-w-xl mb-6 p-3 bg-black border border-cyan-400 rounded-lg outline-none"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleJobs.map((job, i) => (
          <div key={i} className="glass p-4 rounded-xl">
            <div className="flex items-center gap-3">
              {job.LogoURL && (
                <img
                  src={job.LogoURL}
                  onError={(e) => (e.target.src = "/logo-placeholder.png")}
                  className="w-10 h-10 rounded"
                />
              )}
              <div>
                <h3 className="font-semibold">{job.Role}</h3>
                <p className="text-sm text-gray-400">{job.Company}</p>
              </div>
            </div>

            <div className="mt-3 text-sm">
              <p>💰 {job.Salary}</p>
              <p>📍 {job.Location}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {job.Tags &&
                job.Tags.split(",").map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-400 rounded"
                  >
                    {tag.trim()}
                  </span>
                ))}
            </div>

            <a
              href={
                job.ApplyLink?.startsWith("http")
                  ? job.ApplyLink
                  : `https://${job.ApplyLink}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-4 bg-cyan-500 text-black py-2 rounded-lg"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>

      {visibleCount < filteredJobs.length && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition"
          >
            Load More Jobs
          </button>
        </div>
      )}
    </section>
  );
}
